import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';


@Schema()
export class Alumno {
    @Prop({ required: true })
    nombre: string;

    @Prop({default: 'sin apellido'})
    apellido: string;

    @Prop({ required: [true, 'La edad es obligatoria'] })
    edad: number;
}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
