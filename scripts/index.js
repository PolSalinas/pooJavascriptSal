import Curso from "./clases/Curso.js";

/*const jspoo = new Curso("POO Javascript","https://edteam-media.s3.amazonaws.com/specialities/medium/9aeb8331-58e3-4ca1-a6df-999f96fa24b8.jpeg",10)
const python = new Curso("Python","https://edteam-media.s3.amazonaws.com/specialities/medium/0a1542ab-ecb2-4e05-a4b5-eddf5778bf57.jpeg",12)
*/
const elemento = document.getElementById("curso")

function crearCursos(curso) {
    //Creamos un elemento en el DOM
    const hijoElemento = document.createElement("div")
    //Agrega la clase "card" a cada "hijoElemento" creado
    hijoElemento.classList.add("card")
    //Insertamos contenido a un elemento del DOM
    hijoElemento.innerHTML = `

        <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="${curso.getPoster()}" alt="">
        </div>
        <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 class="t5 s-mb-2 s-center">
                ${curso.getNombre()}
            </h3>
            <div class="s-main-center">
                <span>Cantidad de clases: ${curso.getNroClases()}</span>
            </div>
        </div>
        
    `
    //"hijoElemento" es hijo de "elemento" en el DOM
    elemento.appendChild(hijoElemento)
}

//Capturamos id del Formulario
const myformulario = document.getElementById("formCursos")
//Tomamos el evento submit al presionar el botón
myformulario.addEventListener("submit",e=>{
    //evitamos que se envien los datos de los input
    e.preventDefault()
    //tomamos la estructura del formulario
    const mytarget = e.target
    //Tomamos cualquier input con su name => mytarget.nombreCurso
    //Tomamos el contenido del input => mytarget.nombreCurso.value

    //Creamos el OBJETO
    const myCurso = new Curso(mytarget.nombreCurso.value,mytarget.posterCurso.value,mytarget.nroclasesCurso.value)
    crearCursos(myCurso)
})


/*crearCursos(jspoo)
crearCursos(python)*/

