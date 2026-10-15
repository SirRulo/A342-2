import { Module } from '@nestjs/common';
import { AlumnosService } from './alumnos.service.js';
import { AlumnosController } from './alumnos.controller.js';


@Module({
  controllers: [AlumnosController ],
  providers: [AlumnosService],
  imports: [],

})
export class AlumnosModule {}
