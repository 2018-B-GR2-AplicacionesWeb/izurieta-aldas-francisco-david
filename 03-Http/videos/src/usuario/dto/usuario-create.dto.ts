import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UsuarioCreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  nombre: string;

  @IsNotEmpty()
  @IsString()
  @Length(5)
  biografia: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
