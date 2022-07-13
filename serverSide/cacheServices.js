const fs = require('fs');
const stringSimilarity = require('string-similarity');
const { promisify } = require('util');


// Pruebas
const PRUEBA_ROUTE = './public/prueba.txt'

///API created by Matias Gutierrez which show the movies on screen in Mar del Plata, Argentina.
const APIMG_URL = 'https://que-vemos-production.up.railway.app/'
const APIMG_ROUTE = './public/APIMG.json' //ToDo pasarlo a un config


// API TMDB
const APITMDB_ROUTE = './public/APITMDB.json'
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

const getMoviesTitlesFromAPIMG = (data) => {
    let moviesTitles = [];

    for (const movie in data) {
        console.log(data[movie].titulo);
        moviesTitles.push(data[movie].titulo)
    }
    return moviesTitles;
}

const movieInfoFromTitles = async (titles, addInfo) => {
    for (const title of titles) {
        await fetch(movieByNameEndpoint(title)).then(async (res) => {
            console.log(`La salida es ${movieByNameEndpoint(title)}`)
            let json = await res.json()

            if (json.results[0]) {
                id = json.results[0].id
                await fetch(movieInfoEndpoint(id)).then(async (res) => {
                    json = await res.json()
                    console.log({...json,id})
                    addInfo(json)

                })
            }
            //console.log(json);
            //addInfo(json.results[0])

        })
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
            let titles = getMoviesTitlesFromAPIMG(json)
            saveFile(JSON.stringify(json), APIMG_ROUTE);


            //Save info about movies from TMDB
            const moviesInfo = []
            function addInfo(x) { moviesInfo.push(x) }
            await movieInfoFromTitles(titles, addInfo);
        
            saveFile(JSON.stringify(moviesInfo), APITMDB_ROUTE)
          
        })
    }
}




cacheServices.start();

//export default cacheServices;

