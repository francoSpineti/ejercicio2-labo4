export class Usuario{

    nombre ?: string;
    clave ?: string;

    constructor(id ?: string,nombre ?: string, clave ?: string){
        this.nombre = nombre;
        this.clave = clave;
    }

    toJson() : any{
        const json ={
            nombre : this.nombre,
            clave : this.clave
        };
        return json;
    }

}