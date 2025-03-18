// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// require('dotenv').config();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow frontend requests from localhost:3001
  app.enableCors({
    origin: 'http://localhost:3001', // Allow the frontend to access the backend
    methods: 'GET, POST, PUT, DELETE', // Allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Allowed headers
  });

  await app.listen(3000);
}
bootstrap();
