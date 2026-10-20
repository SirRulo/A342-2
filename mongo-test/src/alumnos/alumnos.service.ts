import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Error as MongooseError, Model } from 'mongoose';
import { Alumno } from './entities/alumno.entity';

@Injectable()
export class AlumnosService {

  constructor(@InjectModel('Alumno') private readonly alumnoModel: Model<Alumno>) {}

  async create(createAlumnoDto: CreateAlumnoDto) {
    try {
      return await this.alumnoModel.create(createAlumnoDto);
    } catch (error) {
      if (error instanceof MongooseError.ValidationError) {
        throw new BadRequestException(
          Object.values(error.errors).map((error) => error.message),
        );
      }

      throw error;
    }
  }

  async findAll() {
    return this.alumnoModel.find().exec();
  }

  async findOne(id: string) {
    return this.alumnoModel.findById(id).exec();
  }

  async update(id: string, updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoModel.findByIdAndUpdate(id, updateAlumnoDto, {upsert: true, new: true}).exec();
  }

  async remove(id: string) {
    return this.alumnoModel.deleteOne({ _id: id }).exec();
  }
}
