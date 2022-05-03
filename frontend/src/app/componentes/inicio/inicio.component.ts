import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/entidades/persona';
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
      url:['https://',[Validators.required]],
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
       let fullName=this.form.get("fullName")?.value;
       let aboutMe=this.form.get("aboutMe")?.value;
       let position=this.form.get("position")?.value;
       let url=this.form.get("url")?.value;

       let personaEditar= new Persona(fullName,aboutMe,position,url);
       this.miServicio.editarDatosPersona(personaEditar).subscribe({
        next: (data) =>{
          this.persona=personaEditar;
          this.form.reset();
          document.getElementById("cerrarModalInicio")?.click();
        },
        error: (error) =>{
          alert("Ups, no se pudo actualizar el registro.Por favor, intente nuevamente");
        },
       })
      
     }
     else
     {
       this.form.markAllAsTouched();
     }
  }
  mostrarDatosInicio(){
    this.form.get("fullName")?.setValue(this.persona.fullName);
    this.form.get("aboutMe")?.setValue(this.persona.aboutMe);
    this.form.get("position")?.setValue(this.persona.position);
    this.form.get("url")?.setValue(this.persona.image);
  }
}