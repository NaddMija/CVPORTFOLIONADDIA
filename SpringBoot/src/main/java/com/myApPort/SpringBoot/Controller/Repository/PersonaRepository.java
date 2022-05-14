
package com.myApPort.SpringBoot.Controller.Repository;

import com.myApPort.SpringBoot.Model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<Persona,Long> {
    
}





