//import dataMg from '../../public/APIMG.json'
//import dataTMDB from '../../public/TMDB.json'


const urlAPI = '/API.json'
const objFromJsonUrl = async (url) => { return await fetch(url).then(async (data) => { return await data.json() }) }

export const getMoviesInfo = async () => {
    //return {"API_MG" : JSON.parse(dataMg), "API_TMDB" : JSON.parse(dataTMDB)}
    let info = await objFromJsonUrl(urlAPI);
    return info
}

export const isPersistedState = stateName =>{
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
  };


 export const loadMoviesInfoAndSave = async (setState,setLoading) => {
    setLoading(true)
    try {
        const info = await getMoviesInfo()
        // Saving in sessionStorage
        sessionStorage.setItem('MoviesInfo', JSON.stringify(info))
        console.log('Data Services: Loading')
        setState(info)
    }
    catch (err) { console.log(err) }
    setLoading(false)
}

export const effectLoadMoviesInfoAndSave = (setState,setLoading) => {
    const sessionState = isPersistedState('MoviesInfo');
    if (sessionState) {
        console.log(' Grabbing from session Storage');
    
        setState(sessionState)
        return;
    }
    loadMoviesInfoAndSave(setState,setLoading)
};