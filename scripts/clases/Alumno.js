import Usuario from "./Usuario.js"

export default class Alumno extends Usuario{
    constructor(nombre,apellido,correo,activo,cursosTomados) {
        super(nombre,apellido,correo,activo)
        this.cursosTomados=cursosTomados
    }
    getCursosTomados(){
        return this.cursosTomados
    }
    setCursosTomados(newCursoTomado){
        this.cursosTomados = newCursoTomado
    }
}