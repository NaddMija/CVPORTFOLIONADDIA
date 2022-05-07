import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acerca } from '../entidades/acerca';
import { Persona } from '../entidades/persona';

@Injectable({
  providedIn: 'root'
})
export class MiportfolioService {

  constructor(private http:HttpClient) {
    console.log("el servicio esta corriendo");
   }
   obtenerDatosPersona():Observable<any>{
     return this.http.get('./assets/data/persona.json');
   }
   obtenerDatosAcerca():Observable<any>{
     return this.http.get('./assets/data/acerca.json');
   }
   editarDatosPersona(persona:Persona):Observable<any>{
     return this.http.post('http://localhost:3000/posts',persona);
   }
   editarDatosAcerca(acerca=Acerca):Observable<any>{
     return this.http.post('http://localhost:3000/posts', acerca);
   }
}