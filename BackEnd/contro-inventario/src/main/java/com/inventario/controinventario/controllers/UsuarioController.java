package com.inventario.controinventario.controllers;

import com.inventario.controinventario.models.Usuario;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //vamos a enviar archivos json (api)
@RequestMapping
public class UsuarioController {

    @GetMapping("/DatosUsuario")
    public Usuario DatosUsuario(){
        Usuario usuario1 = new Usuario();
        usuario1.

        return usuario1;
    }
}
