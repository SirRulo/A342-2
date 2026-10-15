import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module.js';
import { AlumnosModule } from './alumnos/alumnos.module.js';


@Module({
  imports: [UsuariosModule, AlumnosModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
