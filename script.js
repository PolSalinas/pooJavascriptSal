//OBJETOS LITERALES
/*const alumno = {
    nombre:"John",
    edad:30
}

console.log(alumno)

alumno.genero = "Masculino"
alumno.nombre = "Juan"

console.log(alumno)*/

//FUNCIÓN CONSTRUCTORA
function Usuario(nombre,apellido,correo,activo){
    this.nombre=nombre,
    this.apellido=apellido,
    this.correo=correo,
    this.activo=activo
}

const john = new Usuario("john","rucana","pol@gmail.com",true)
const pol = new Usuario("pol","salinas","pol2@gmail.com",false)

console.log(john)
console.log(pol)