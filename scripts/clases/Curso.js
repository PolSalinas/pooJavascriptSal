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
    getPoster(){
        return this.poster
    }
    getNroClases(){
        return this.nroClases
    }
    getInscritos(){
        return this.inscritos
    }

    setNombre(nombre){
        this.nombre = nombre
    }
    setPoster(poster){
        this.poster = poster
    }
    setNroClases(nroClases){
        this.nroClases = nroClases
    }
    setInscritos(inscritos){
        this.inscritos = inscritos
    }
}