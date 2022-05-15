import { Component, OnInit } from '@angular/core';
import { MisProyectosService } from 'src/app/servicios/mis-proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  trabajos:any;
  constructor(private miProyecto:MisProyectosService) { 
  
  }

  ngOnInit(): void {
    this.miProyecto.obtenerDatosProyectos().subscribe(data=> {
      console.log(data);
      this.trabajos=data["proyectos"];
    });
  }

}