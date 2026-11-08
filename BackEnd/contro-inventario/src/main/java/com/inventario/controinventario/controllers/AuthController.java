package com.inventario.controinventario.controllers;

import com.inventario.controinventario.models.Usuario;
import com.inventario.controinventario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/auth")
@CrossOrigin(origins = "http://localhost:4321") // Puerto por defecto de Astro para evitar problemas de CORS
public class AuthController {

    @Autowired
    private UsuarioRepository usuarioRepository;


    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Usuario loginRequest){
        //Buscamos el usuario por su correo
        Usuario usuario = usuarioRepository.finByCorreo(loginRequest.getEmail());

        if(usuario !=null && usuario.getPassword().equals(loginRequest.getPassword())){
            return ResponseEntity.ok(usuario);
        }

        return ResponseEntity.status(401).body("Correo o contraseña incorrectos");

    }

}
