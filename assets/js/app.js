
// Botones para avanzar o retroceder en el html
let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');

btnSiguiente.addEventListener('click', () => {
    if(pagina < 1000) {
    pagina += 1;
    cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
    pagina -= 1;
    cargarPeliculas();
    }
});

// Consumo de la API
const cargarPeliculas = async() => {

    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=cab36f68210a8e72956701498a2ece4c&page=${pagina}`);

        // console.log(respuesta);

        // si la respuesta es correcta
        if(respuesta.status === 200){
        const datos = await respuesta.json();
        // llamado a conseguir los poster de cada película
        let peliculas = '';
        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
            <h3 class="titulo">${pelicula.title}</h3>
            </div>
            `;
        });

        document.getElementById('contenedor').innerHTML = peliculas;

        // administracion de errores en la consola
        } else if(respuesta.status === 401){
            console.log('mala key');
        } else if(respuesta.status === 404){
            console.log('La pelicula no existe');
        } else {
            console.log ('hubo un error indefinido');
        }

    } catch(error){
        // console.log(error);
    }
}

cargarPeliculas();



