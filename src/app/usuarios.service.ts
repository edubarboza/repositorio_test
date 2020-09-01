import { Injectable } from '@angular/core';

@Injectable({
    providedIn : 'root'
})
export class UsuariosService {

    getUsuarios(){
        return [
            {
                "nombre": "Luis Salinas",
                "edad": 20,
                "hobby": "cantar"
            },
            {
                "nombre": "Day Meyers",
                "edad": 30,
                "hobby": "patinar"
            },
            {
                "nombre": "Juan Perez",
                "edad": 25,
                "hobby": "basquet"
            }
        ];
    }

}