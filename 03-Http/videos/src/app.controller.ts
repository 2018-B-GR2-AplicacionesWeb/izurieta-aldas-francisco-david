import {
  Get,
  Controller,
  Request,
  Response,
  Headers,
  HttpCode,
  HttpException,
  Query,
  Param,
  Res,
  Post,
  Body,
  Session,
  BadRequestException
} from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { Usuario, UsuarioService } from './usuario/usuario.service';
import { ExpressionStatement } from 'typescript';
import { Code } from 'typeorm';

@Controller() // Decoradores!
export class AppController {
  constructor(private readonly _usuarioService: UsuarioService) {}

  @Get('saludar')
  saludar(
    @Query() queryParams,
    @Query('nombre') nombre,
    @Headers('seguridad') seguridad,
    @Session() sesion
  ): string {
    console.log('Sesion:', sesion);
    // metodo!
    return nombre;
  }

  // /Usuario/segmentoUno/12/segmentoDos
  @Get('segmentoUno/:idUsuario/segmentoDos')
  ruta(@Param() todosParametrosRuta, @Param('idUsuario') idUsuario): string {
    // metodo!
    return idUsuario;
  }

  @Get('despedirse')
  @HttpCode(201)
  despedirse(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      throw new HttpException(
        {
          mensaje: 'Error en despedirse'
        },
        400
      );
    });
  }

  @Get('tomar')
  @HttpCode(201)
  tomar(): string {
    // metodo!
    return 'Estoy borracho';
  }

  @Get('saludarObservable')
  saludarObservable(): Observable<string> {
    // metodo!
    return of('Hola mundo');
  }

  @Post('login')
  @HttpCode(200)
  async loginMedoto(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res() response,
    @Session() sesion
  ) {
    const identificado = await this._usuarioService.login(username, password);

    if (identificado) {
      sesion.usurio = username;
      response.redirect('/saludar');
    } else {
      throw new BadRequestException({ mensaje: 'Error login' });
    }
  }

  @Get('login')
  loginVista(@Res() response) {
    response.render('login');
  }
}
