import { UsuarioController } from './usuario.controller';
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule {}
