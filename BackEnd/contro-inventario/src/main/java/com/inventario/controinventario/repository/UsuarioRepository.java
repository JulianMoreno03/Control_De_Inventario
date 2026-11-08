package com.inventario.controinventario.repository;

import com.inventario.controinventario.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario,Long> {
    // Buscar un usuario por su correo para validar el login
    Usuario findByEmail(String email);// Devuelve el usuario directo o null si no lo encuentra
}
