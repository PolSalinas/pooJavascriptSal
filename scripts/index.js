import Curso from "./clases/Curso.js";
import Docente from "./clases/Docente.js";
import Alumno from "./clases/Alumno.js";


// ? .........................................................
// ? --------------- CREAR CURSO -----------------------------
// ? .........................................................

const jspoo = new Curso("POO Javascript","https://edteam-media.s3.amazonaws.com/specialities/medium/9aeb8331-58e3-4ca1-a6df-999f96fa24b8.jpeg",10)
const python = new Curso("Python","https://edteam-media.s3.amazonaws.com/specialities/medium/0a1542ab-ecb2-4e05-a4b5-eddf5778bf57.jpeg",12)

const elemento = document.getElementById("curso")
const listaCursos=[]

function crearCursos(curso) {
    // ! Creamos un elemento en el DOM
    const hijoElemento = document.createElement("div")
    // ! Agrega la clase "card" a cada "hijoElemento" creado
    hijoElemento.classList.add("card")
    // ! Insertamos contenido a un elemento del DOM
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
    // ! "hijoElemento" es hijo de "elemento" en el DOM
    elemento.appendChild(hijoElemento)
}
crearCursos(jspoo)
crearCursos(python)

// ? -----------------------------------------------------------------------
// ? LLEVAMOS EL NOMBRE DE LOS CURSOS A LOS OTROS SELECT DE ALUMNO Y DOCENTE
// ? ------------------------------------------------------------------------
const updateCursosAl = document.getElementById("updateCursosAl")
const updateCursosDoc = document.getElementById("updateCursosDoc")
function generarValue(contador){
    contador++
    return contador
}
function updateSelect() {
    let contador=0;
    // ! Limpiamos las opciones anteriores del select (excepto la primera opción estática)
    // ! Empezamos desde el índice 1 para dejar la opción "-- Seleccione un curso --"
    while(updateCursosAl.options.length>1){
        updateCursosAl.remove(1);
        updateCursosDoc.remove(1);
    }
    listaCursos.forEach(lcursos=>{
        const newoptionAl = document.createElement("option")
        newoptionAl.value=generarValue(contador)

        const newoptionDoc = document.createElement("option")
        newoptionDoc.value=newoptionAl.value

        newoptionAl.textContent=lcursos.getNombre()
        newoptionDoc.textContent=lcursos.getNombre()
        updateCursosAl.appendChild(newoptionAl)
        updateCursosDoc.appendChild(newoptionDoc)
        contador=generarValue(contador)
    })
}
listaCursos.push(jspoo)
listaCursos.push(python)
updateSelect()



// ! Capturamos id del Formulario
const myformulario = document.getElementById("formCursos")
// ! Tomamos el evento submit al presionar el botón
myformulario.addEventListener("submit",e=>{
    // ! evitamos que se envien los datos de los input
    e.preventDefault()
    // ! tomamos la estructura del formulario
    const mytarget = e.target
    console.log(mytarget)
    // ! Tomamos cualquier input con su name => mytarget.nombreCurso
    // ! Tomamos el contenido del input => mytarget.nombreCurso.value

    // ! Creamos el OBJETO
    const myCurso = new Curso(mytarget.nombreCurso.value,mytarget.posterCurso.value,mytarget.nroclasesCurso.value)
    crearCursos(myCurso)
    listaCursos.push(myCurso)
    updateSelect()
})


// ? OJOOOOOOOOO podriamos usar "this" ya que es igual a "e.target", podriamos escribir this.nombreCurso para acceder al input.

// ? OJOOOOOOOOO this puede funcionar tanto en funciones flecha como regulares, sin embargo es mejor usarlo en funciones regular ya que
// ? las funciones flecha no tienen su propio this y heredan el de su contexto externo, lo que significa que this dentro de una 
// ? función flecha de evento no será el elemento del evento.

// ? OJOOOOOOOOO usar this cuando 
// * Cuando un manejador de eventos se adjunta a un elemento padre para escuchar eventos de sus hijos. 
// * this se refiere consistentemente al elemento padre (el contenedor).
// ? usar event.target cuando
// * Para identificar el elemento específico que fue clickeado o que disparó el evento por ejemplo cuando tenemos elementos 
// * anidados en html y poder identificar el elemento que realmente generó el evento y luego decidir si quieres realizar una acción en él

// ? OJOOOOOOOOO con respecto a "e => {} dentro de addEventListener debemos tener en cuenta lo siguiente:::"
// ? ----Se usa arrow functions (e => {}) en addEventListenner 
// * Cuando necesitas acceder a this del ámbito superior, por ejemplo, para acceder a variables o métodos 
// * de la clase que contiene el listener. También cuando el callback no necesita tener su propio this dinámico. 

// ? ----Se usa funciones regulares (function(){}) en addEvntListener
// * Cuando necesitas que this dentro del callback se refiera al elemento HTML que disparó el evento.

// ? En este caso seria mejor usar una funcion regular, pero es solo un ejemplo.

const alumno1 = new Alumno("john","pol","pol@gmail.com",true,["html","css"])
const alumno2 = new Alumno("john","pol","pol@gmail.com",true,["php","js"])

const html = new Curso("html","poster.jpg",10)
// ! El spread operator "..." me permite obtener los valores de un arreglo 
html.setInscritos([...html.getInscritos(),alumno1])
html.setInscritos([...html.getInscritos(),alumno2])

console.log(html.getInscritos())
console.log(alumno1.nom1)


// ? ..........................................................
// ? --------------- CREAR ALUMNO -----------------------------
// ? ..........................................................

const formAlumno = document.getElementById("formAlumnos")
const contTablaAlum = document.getElementById("tablaAlumnos")

// * const objAlumno = new Alumno("JOhn","Rucana","pol@gmail.com",true,"html")

// ! Con esta función obtenemos los cursos seleccionados guardandolos en un array
function obtenerOptionAl() {
    const captionOption = Array.from(updateCursosAl.selectedOptions).map(opcion=>opcion.textContent).join(" * ")
    console.log(captionOption)
    return captionOption
}
formAlumno.addEventListener("submit",function(e){
    e.preventDefault()
    const objAlumno = new Alumno(this.nombreAlum.value,this.apellidoAlum.value,this.correoAlum.value,this.activoAlum.value,obtenerOptionAl())

    const filaAlumno = document.createElement("tr")
    const nomAlum = document.createElement("td")
    const apeAlum = document.createElement("td")
    const corAlum = document.createElement("td")
    const actAlum = document.createElement("td")
    const curAlum = document.createElement("td")

    nomAlum.textContent = objAlumno.getNombre()
    apeAlum.textContent = objAlumno.getApellido()
    corAlum.textContent = objAlumno.getCorreo()
    actAlum.textContent = objAlumno.getActivo()
    curAlum.textContent = objAlumno.getCursosTomados()

    filaAlumno.appendChild(nomAlum)
    filaAlumno.appendChild(apeAlum)
    filaAlumno.appendChild(corAlum)
    filaAlumno.appendChild(actAlum)
    filaAlumno.appendChild(curAlum)

    contTablaAlum.appendChild(filaAlumno)
    formAlumno.reset()
})


// ? ..........................................................
// ? --------------- CREAR DOCENTE -----------------------------
// ? ..........................................................

const formDocentes = document.getElementById("formDocentes")
const tablaDocente = document.getElementById("tablaDocentes")

const obtenerOptionDoc = ()=>{
    const captionOption = Array.from(updateCursosDoc.selectedOptions).map(opcion=>opcion.textContent).join(" * ")
    return captionOption
}

const crearAlumno = (objDocente) =>{
    tablaDocente.innerHTML=`
        <tr>
            <td>${objDocente.getNombre()}</td>
            <td>${objDocente.getApellido()}</td>
            <td>${objDocente.getCorreo()}</td>
            <td>${objDocente.getActivo()}</td>
            <td>${objDocente.getCursosDictados()}</td>
            <td>${objDocente.getCalificacion()}</td>
        </tr>
    `
}

formDocentes.addEventListener("submit",(e)=>{
    e.preventDefault()
    const estrDoc = e.target
    const objetoDocente = new Docente(estrDoc.nombreDoc.value,estrDoc.apellidoDoc.value,estrDoc.correoDoc.value,estrDoc.activoDoc.value,obtenerOptionDoc(),estrDoc.califiDoc.value)
    crearAlumno(objetoDocente)
})



// ? ..........................................................
// ? --------------- CREAR PESTAÑAS O TABS -----------------------------
// ? ..........................................................

const tab = document.querySelectorAll(".tabs h3")
const tabContent = document.querySelectorAll(".tabs-container .tcontainer")

tab.forEach((mytab,index)=>{
    mytab.addEventListener("click",()=>{
        tab.forEach(mytab2=>mytab2.classList.remove("active"))
        mytab.classList.add("active")
    
        tabContent.forEach(contenttab=>contenttab.classList.remove("active"))
        tabContent[index].classList.add("active")
    })
})