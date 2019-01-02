import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [
    {
      nombre: 'Francisco',
      biografia: 'Ingeniero',
      id: 1
    },
    {
      nombre: 'David',
      biografia: 'Doctor',
      id: 2
    },
    {
      nombre: 'Diana',
      biografia: 'Abogada',
      id: 3
    }
  ];
  registroActual = 4;

  crear(nuevoUsuario: Usuario): Usuario {
    nuevoUsuario.id = this.registroActual;
    this.registroActual++;
    this.usuarios.push(nuevoUsuario);
    return nuevoUsuario;
  }

  actualizar(idUsuario: number, nuevoUsuario: Usuario): Usuario {
    const indiceUsuario = this.usuarios.findIndex(
      usuario => usuario.id === idUsuario
    );
    this.usuarios[indiceUsuario] = nuevoUsuario;
    return nuevoUsuario;
  }

  borrar(idUsuario: number): Usuario {
    const indiceUsuario = this.usuarios.findIndex(
      usuario => usuario.id === idUsuario
    );
    const usuarioBorrado = JSON.parse(
      JSON.stringify(this.usuarios[indiceUsuario])
    );
    this.usuarios.splice(indiceUsuario, 1);
    return usuarioBorrado;
  }

  buscarPorId(idUsuario: number) {
    return (
      this.usuarios
        // .find(u=>u.id === idUsuario);
        .find(usuario => {
          return usuario.id === idUsuario;
        })
    );
  }

  buscarPorNombreOBiografia(busqueda: string): Usuario[] {
    return this.usuarios.filter(usuario => {
      const tieneAlgoEnElNombre = usuario.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());
      const tieneAlgoEnLaBio = usuario.biografia
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      return tieneAlgoEnElNombre || tieneAlgoEnLaBio;
    });
  }
}

export interface Usuario {
  nombre: string;
  biografia: string;
  id: number;
}
