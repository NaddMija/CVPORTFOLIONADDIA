import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona:any;

  constructor( private miServicio:MiportfolioService ){ }

  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

}
