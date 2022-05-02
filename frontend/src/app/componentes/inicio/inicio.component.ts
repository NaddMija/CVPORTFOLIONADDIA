import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiportfolioService } from 'src/app/servicios/miportfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  persona:any;
  usuarioAutenticado:boolean=true;//deberia estar en false al principio hasta que se loguee el usuario
  form:FormGroup;
  constructor( private miServicio:MiportfolioService,private miFormBuilder:FormBuilder){ 
    this.form=this.miFormBuilder.group({
      fullName:['',[Validators.required,Validators.minLength(5)]],
      aboutMe:['',[Validators.required,Validators.minLength(50)]],
      position:['',[Validators.required,Validators.minLength(5)]],
      url:['https://',[Validators.required,Validators.pattern('https?://.+')]],
    })
  }
  get fullName(){
    return this.form.get("fullName");
  }
  ngOnInit(): void {
    this.miServicio.obtenerDatosPersona().subscribe(data=>{
      console.log(data);
      this.persona=data["persona"];
    })
  }

  guardarInicio(){
     if(this.form.valid){
      alert("Enviar los datos al servicio (servidor)");
      this.form.reset();
      document.getElementById("cerrarModalInicio")?.click();
     }
     else
     {
       alert("Hay errores");
       this.form.markAllAsTouched();
     }
  }
}
