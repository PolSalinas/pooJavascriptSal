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
/*function Usuario(nombre,apellido,correo,activo){
    this.nombre=nombre,
    this.apellido=apellido,
    this.correo=correo,
    this.activo=activo
}

const john = new Usuario("john","rucana","pol@gmail.com",true)
const pol = new Usuario("pol","salinas","pol2@gmail.com",false)

console.log(john)
console.log(pol)*/



//LAS FUNCIONES CONSTRUCTORAS EVOLUCIONARON A CLASES
//CLASES
/*class Usuario {
    constructor(nombre,apellido,correo,activo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.correo=correo,
        this.activo=activo
    }
}
const john = new Usuario("john","rucana","pol@gmail.com",true)
const pol = new Usuario("pol","salinas","pol2@gmail.com",false)

//john y pol son instancias de la clase Usuario
console.log(john)
console.log(pol) */



//MÉTODODS
/*class Usuario {
    constructor(nombre,apellido,correo,activo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.correo=correo,
        this.activo=activo
    }

    presentar(){
        return `Soy ${this.nombre} y mi correo es ${this.correo}`
    }

    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    setApellido(nuevoApellido){
        this.apellido=nuevoApellido
    }
}

const john = new Usuario("john","rucana","pol@gmail.com",true)
const pol = new Usuario("pol","salinas","pol2@gmail.com",false)


console.log(john.presentar());
john.setApellido("rojas perez")
console.log(`${john.getNombre()} ${john.getApellido()}`);*/



//HERENCIA
class Usuario {
    constructor(nombre,apellido,correo,activo){
        this.nombre=nombre,
        this.apellido=apellido,
        this.correo=correo,
        this.activo=activo
    }

    presentar(){
        return `Soy ${this.nombre} y mi correo es ${this.correo}`
    }

    getNombre(){
        return this.nombre
    }
    getApellido(){
        return this.apellido
    }
    setApellido(nuevoApellido){
        this.apellido=nuevoApellido
    }
}

class Docente extends Usuario{
    constructor(nom,ape,corr,act,cursosDictados,calificacion) {
        super(nom,ape,corr,act)
        this.cursosDictados=cursosDictados
        this.calificacion=calificacion
    }
}

class Alumno extends Usuario{
    constructor(nombre,apellido,correo,activo,cursosTomados) {
        super(nombre,apellido,correo,activo)
        this.cursosTomados=cursosTomados
    }
}

const john = new Docente("john","rucana","pol@gmail.com",true,["matematicas","lenguaje"],10)
const pol = new Alumno("pol","salinas","pol2@gmail.com",false,["ingles","fisica"])

console.log(john)
console.log(pol.presentar())