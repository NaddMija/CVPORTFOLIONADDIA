
package com.myApPort.SpringBoot.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class Persona{
    @Id
    @GeneratedValue (strategy=GenerationType.IDENTITY)   
    Long id;
    String fullName;
    String aboutMe;
    String position;
    String ubicacion;
    
    public Persona(Long id, String fullName, String aboutMe,String position, String ubicacion){
        this.id=id;
        this.fullName=fullName;
        this.aboutMe=aboutMe;
        this.ubicacion=ubicacion;
        this.position=position;
        
    }
     public Persona(){
         
}

    
}
