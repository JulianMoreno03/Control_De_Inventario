package com.inventario.controinventario.controllers;

import com.inventario.controinventario.models.Usuario;
import com.inventario.controinventario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController //vamos a enviar archivos json (api)
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // quita bloqueo de CORS
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    //Permite encontrar a todos los usuarios
    @GetMapping
    public List<Usuario> ListarUsuarios(){
        return usuarioRepository.findAll();
    }

    // Metodo para validad el login
    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Usuario loginRequest){
        //Buscamos el usuario por su correo
        Usuario usuario = usuarioRepository.findByEmail(loginRequest.getEmail());

        if(usuario !=null && usuario.getPassword().equals(loginRequest.getPassword())){
            return ResponseEntity.ok(usuario);
        }

        return ResponseEntity.status(401).body("Correo o contraseña incorrectos");

    }
}
