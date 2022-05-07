import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Acerca } from 'src/app/entidades/acerca';
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
      start:['',[Validators.required,Validators.min(4)]],
      end:['',[Validators.required,Validators.min(4)]],
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
      let school=this.form.get("school")?.value;
      let title=this.form.get("title")?.value;
      let start=this.form.get("start")?.value;
      let end=this.form.get("end")?.value;

      let acerca= new Acerca(school,title,start,end);
     this.miServicio.editarDatosAcerca(this.acerca).subscribe(data=>{
     
      //modificar los datos del componente con los datos ingresados por el usurio
     this.acerca=Acerca;
    })
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