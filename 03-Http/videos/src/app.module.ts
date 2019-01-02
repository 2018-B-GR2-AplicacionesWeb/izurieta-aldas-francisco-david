import { UsuarioEntity } from './usuario/usuario-entity';
import { UsuarioModule } from './usuario/usuario.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 32780,
      username: 'videos',
      password: '12345678',
      database: 'videos',
      synchronize: true,
      entities: [UsuarioEntity]
    }),
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
