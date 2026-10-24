import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationModule } from '@nestjs/authentication';

@Module({
  imports: [
    ConfigModule.forRoot(),
      AuthenticationModule.forRoot({
      globalGuard: false, // por defecto esta setado en true y bloquea todas las rutas
      session: {
  
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
