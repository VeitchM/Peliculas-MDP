const fs = require('fs');
const stringSimilarity = require('string-similarity');
const { promisify } = require('util');


// Pruebas
const PRUEBA_ROUTE = './public/prueba.txt'

///API created by Matias Gutierrez which show the movies on screen in Mar del Plata, Argentina.
const APIMG_URL = 'https://que-vemos-production.up.railway.app/'


// API TMDB
const API_ROUTE = './public/API.json'
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'fa6388411407ff89baf547cef93494ca' //move to other place
const API_LANGUAGE = 'es-MX'

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=`;



//Save and fetch

const saveFile = (text, file) => {
    fs.writeFile(file, text, (err) => {
        err && console.log(err);
    });
}


const getFromUrl = (url, callback) => {
    fetch(url).then(
        (res) => { callback(res) });
}
const saveFromUrl = (link, file) => getFromUrl(link, (data) => { saveFile(data, file) })

const downloadFile = (url, file) => {
    fetch(url).then(x => x.arrayBuffer()).then(data => fs.writeFile(file, Buffer.from(data), (err) => { err && console.log(err) }))
}

//API_TMBD 

const movieByNameEndpoint = (searchTerm) => { return `${SEARCH_BASE_URL}${searchTerm}&page=1` }

const movieInfoEndpoint = (movieId) => { return `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}` }

const creditsEndpoint = (movieId) => { return `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}` }




// API MG



const movieInfoFromTitles = async (APIMG, addInfo) => {
    console.log(APIMG)
    for (const title in APIMG) {
        await fetch(movieByNameEndpoint(APIMG[title].titulo)).then(async (res) => {
            
            let json = await res.json()

            if (json.results[0]) {
                id = json.results[0].id
                await fetch(movieInfoEndpoint(id)).then(async (res) => {
                    json = await res.json()
    
                    await fetch(creditsEndpoint(id)).then(async (resCredits) => {
                        credits = await resCredits.json()
                        filtrateCredits(credits)
                        const funciones = APIMG[title].funciones
                        json.id = title
                        json = { ...json, credits, funciones  }
                        addInfo(json)

                    })
                })
                //console.log(json);
                //addInfo(json.results[0])

            }
            else {
                addInfo(
                    { 'title': APIMG[title].titulo, 'funciones': APIMG[title].funciones, "id": title, "popularity": 0}
                )
            }
        })

    }
}

//filtrateCredits just 6 actors and director, i maybe i could put everyone half as famous of the most famous one
const NUMBER_OF_ACTORS = 6


const filtrateCredits = function (credits) {
    credits.cast = credits.cast.sort((a, b) => b.popularity - a.popularity).slice(0, NUMBER_OF_ACTORS)

    for (number in credits.cast) {
        const { name, popularity, ...rest } = credits.cast[number]
        credits.cast[number] = { name }
    }
    credits.crew = credits.crew.filter((a) => a.job == 'Director');
    for (number in credits.crew) {
        const { name, job, ...rest } = credits.crew[number]
        credits.crew[number] = { name }
    }
}

// Corrector: normalize and mersh similar titles,
const correctTitles = (data) => {
    for (const movie in data) {
        let title = data[movie].titulo
        title = title.replace(/\s\s+/g, ' ');
        if (title.includes(':') && !title.includes(': ')) {
            title = title.replace(':', ': ');
        }
        data[movie].titulo = title;
    }
}

const mersh = (data) => {
    const SENSIBILITY = 0.9
    let i = 0;
    console.log(data[0])
    while (i < data.length) {
        j = i + 1
        while (j < data.length) {
            if (stringSimilarity.compareTwoStrings(data[i].titulo, data[j].titulo) > SENSIBILITY) {
                data[i].funciones.concat(data[j].funciones);
                data.splice(j, 1);
            }
            else
                j++;
        }
        i++;
    }
}


const cacheServices = {
    start: async () => {
        getFromUrl(APIMG_URL, async (data) => {
            json = await data.json()
            correctTitles(json)
            mersh(json);


            //Save info about movies from TMDB
            const moviesInfo = []
            function addInfo(x) { moviesInfo.push(x) }
            await movieInfoFromTitles(json, addInfo);

            saveFile(JSON.stringify(moviesInfo), API_ROUTE)

        })
    }
}




cacheServices.start();

//export default cacheServices;

