package com.inventario.controinventario.controllers;

import com.inventario.controinventario.models.Usuario;
import com.inventario.controinventario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
