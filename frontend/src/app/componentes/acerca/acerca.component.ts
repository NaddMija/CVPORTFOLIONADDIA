import { Component, OnInit } from '@angular/core';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
   acerca:any;
  constructor(private miServicio:MiportfolioService) { }

  ngOnInit(): void {
    this.miServicio.obtenerDatosAcerca().subscribe(data=>{
      console.log(data);
      this.acerca=data["educacion"];
    });
  }

}

