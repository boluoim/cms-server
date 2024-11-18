import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  await app.listen(process.env.PORT ?? 3000, async () => {
    logger.log(`Server is running on ${await app.getUrl()}`);
  });
}
bootstrap();
