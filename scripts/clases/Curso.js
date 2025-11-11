export default class Curso {
    constructor(nombre,poster,nroClases) {
        this.nombre=nombre,
        this.poster=poster,
        this.nroClases=nroClases,
        this.inscritos= new Array()
    }

    getNombre(){
        return this.nombre
    }
    setNombre(nombre){
        this.nombre = nombre
    }
}