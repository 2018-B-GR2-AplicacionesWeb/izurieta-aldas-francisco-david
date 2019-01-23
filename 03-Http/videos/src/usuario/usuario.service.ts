import { UsuarioEntity } from './usuario-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';

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

  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioEntity: Repository<UsuarioEntity>
  ) {}

  buscar(
    parametros?: FindManyOptions<UsuarioEntity>
  ): Promise<UsuarioEntity[]> {
    return this._usuarioEntity.find(parametros);
  }

  async crear(nuevoUsuario: Usuario): Promise<UsuarioEntity> {
    const usuarioEntity = this._usuarioEntity.create(nuevoUsuario);

    const usuarioCreado = await this._usuarioEntity.save(usuarioEntity);

    return usuarioCreado;
  }

  actualizar(idUsuario: number, nuevoUsuario: Usuario): Promise<UsuarioEntity> {
    nuevoUsuario.id = idUsuario;

    const usuarioEntity = this._usuarioEntity.create(nuevoUsuario);

    return this._usuarioEntity.save(usuarioEntity);
  }

  borrar(idUsuario: number): Promise<UsuarioEntity> {
    // CREA UNA INSTANCIA DE LA ENTIDAD
    const usuarioEntityAEliminar = this._usuarioEntity.create({
      id: idUsuario
    });

    return this._usuarioEntity.remove(usuarioEntityAEliminar);
  }

  buscarPorId(idUsuario: number): Promise<UsuarioEntity> {
    return this._usuarioEntity.findOne(idUsuario);
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

  async login(username: string, password: string): Promise<boolean> {
    const usuarioEncontrado = await this._usuarioEntity.findOne({
      where: { username: username }
    });

    if (usuarioEncontrado) {
      if (usuarioEncontrado.password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export interface Usuario {
  nombre: string;
  biografia: string;
  id: number;
  username?: string;
  password?: string;
}
