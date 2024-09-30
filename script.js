// En la siguiente línea se hace la desestructuración de datos
import { barcelona, roma, paris, londres } from './datos.js'

// En las siguientes líneas obtenemos los elementos HTML a través del DOM
const elementosAnchor = document.querySelectorAll('a')
const elementoTitulo = document.getElementById('titulo')
const elementoSubtitulo = document.getElementById('subtitulo')
const elementoParrafo = document.getElementById('parrafo')
const elementoPrecio = document.getElementById('precio')

// Con el inspector del navegador se puede ver que elementosAnchor tiene el método forEach para poder recorrerlo
console.log(elementosAnchor)

// En las siguientes líneas se le agrega un listener para el evento onclick a todos los anchor
elementosAnchor.forEach(enlace => {
    enlace.addEventListener('click', function () {
        // En las siguientes líneas se les quita la clase activo a todos los anchor
        elementosAnchor.forEach(enlace => {
            enlace.classList.remove('activo')
        })
        // En la siguiente línea se le agrega la clase activo al anchor al que se le hizo clic
        this.classList.add('activo')
        // En la siguiente línea se obtiene el contenido a partir del texto del anchor al que se le hizo clic
        const contenido = obtenerContenido(this.textContent)
        // En las siguientes líneas se inyecta el contenido HTML desde JS
        elementoTitulo.innerHTML = contenido.titulo
        elementoSubtitulo.innerHTML = contenido.subtitulo
        elementoParrafo.innerHTML = contenido.parrafo
        elementoPrecio.innerHTML = contenido.precio
    })
})

// Función para obtener el contenido desde datos.js
function obtenerContenido(textoEnlace) {
    const contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    }
    return contenido[textoEnlace]
}