import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
   acerca:any;
   usuarioAutenticado:boolean=true;
   form:FormGroup;
  constructor(private miServicio:MiportfolioService,private miFormBuilder:FormBuilder) {
    this.form=this.miFormBuilder.group({
      school:['',[Validators.required,Validators.minLength(5)]],
      title:['',[Validators.required,Validators.minLength(5)]],
      img:['https://',[Validators.required,Validators.pattern('https?://.+')]],
    })
  }
  get school(){
    return this.form.get("school");
  }
  ngOnInit(): void {
    this.miServicio.obtenerDatosAcerca().subscribe(data=>{
      console.log(data);
      this.acerca=data["educacion"];
    });
  }
  guardarAcerca(){
    if(this.form.valid){
     alert("Enviar los datos al servicio (servidor)");
     this.form.reset();
     document.getElementById("cerrarModalAcerca")?.click();
    }
    else
    {
      alert("Hay errores");
      this.form.markAllAsTouched();
    }
 }
}