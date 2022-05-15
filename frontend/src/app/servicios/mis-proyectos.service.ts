import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MisProyectosService {

  constructor(private http:HttpClient) { 
    console.log("El servicio esta corriendo");
  }
  obtenerDatosProyectos():Observable<any>{
    return this.http.get('./assets/data/proyectos.json');
  }
}
