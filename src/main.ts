import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('qwerty example')
  .setDescription('The  API description')
  .setVersion('1.0')
  .addSecurityRequirements("bearer", ['bearer'])
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? 3000, ()=>{
    console.log("server running on 3000");
  });
}
bootstrap();
