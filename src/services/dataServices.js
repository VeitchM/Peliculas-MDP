//import dataMg from '../../public/APIMG.json'
//import dataTMDB from '../../public/TMDB.json'

const urlAPIMG = '/APIMG.json'
const urlTMDB = '/APITMDB.json'
const objFromJsonUrl = async (url) => { return await fetch(url).then(async (data) => { return await data.json() }) }

export const getMoviesInfo = async () => {
    //return {"API_MG" : JSON.parse(dataMg), "API_TMDB" : JSON.parse(dataTMDB)}
    let info = {}
    info.API_MG = await objFromJsonUrl(urlAPIMG);
    info.API_TMDB = await objFromJsonUrl(urlTMDB);
    return info
}

export const isPersistedState = stateName =>{
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
  };