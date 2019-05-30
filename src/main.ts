import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { join } from 'path';

const adapter = new FastifyAdapter();
adapter.register(require('fastify-multipart'));

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
    {
      logger: console,
    }
  );
  app.enableCors();
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/assets',
  });
  await app.listen(8000);
}
bootstrap();
