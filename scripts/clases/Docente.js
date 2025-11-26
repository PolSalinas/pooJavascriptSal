import Usuario from "./Usuario.js"

export default class Docente extends Usuario{
    constructor(nom,ape,corr,act,cursosDictados,calificacion) {
        super(nom,ape,corr,act)
        this.cursosDictados=cursosDictados
        this.calificacion=calificacion
    }
    getCursosDictados(){
        return this.cursosDictados
    }
    getCalificacion(){
        return this.calificacion
    }
    setCursosDictados(newCursDictados){
        this.cursosDictados=newCursDictados
    }
    setCalificacion(newCalificacion){
        this.calificacion=newCalificacion
    }
}