export const separateByCinema = (funciones) => {
    const cinemas = [];
    for (const funcion in funciones) {
        const cine = cinemas.find(
            cinema => cinema.name === funciones[funcion].cinema)
        if (cine !== undefined) {
            cine.funciones.push(funciones[funcion]);
        }
        else {
            cinemas.push({ "name": funciones[funcion].cinema, 'funciones': [funciones[funcion]] })
        }
    }
    return cinemas

}

export  const filteredByCinema = (name, moviesInfo) => {
    let funciones = allFunciones(moviesInfo)
    console.log('All funciones: ', funciones);
    funciones = separateByCinema(funciones).find(cinema => (cinema.name == name))
    console.log('All funciones filtrado: ',name, funciones);
    
    return funciones;
}


export const allFunciones = (moviesInfo) => {
    const funciones = []
    moviesInfo.map(movie => {
        movie.funciones.map(funcion => {
            funciones.push({ "title": movie.title, ...funcion })
        })

    })
    return funciones;

}
export const sortByTime = (funciones) => {
    funciones.sort((a, b) => (a.hora>b.hora));
}