import { IsString, IsNumber, IsEmpty } from "class-validator";

export class CreateAlumnoDto {
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    nombre: string;

    @IsString({ message: 'El apellido debe ser una cadena de texto' })
    apellido: string;
    
    @IsNumber({},{message: 'La edad debe ser un número' })
    edad: number;
}
