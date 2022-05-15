import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MisProyectosService {

  constructor(private http:HttpClient) { 
    console.log("El servicio esta corriendo");
  }
  obtenerDatosProyectos(){
    this.http.get('');
  }
}
