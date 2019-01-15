import { PaginaEntity } from './pagina/pagina-entity';
import { UsuarioEntity } from './usuario/usuario-entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibroEntity } from './libro/libro-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 32768,
      username: 'francisco',
      password: '123456789',
      database: 'videos',
      synchronize: true,
      dropSchema: false,
      entities: [UsuarioEntity, LibroEntity, PaginaEntity]
    }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
