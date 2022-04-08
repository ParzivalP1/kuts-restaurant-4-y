// Easter egg ()
import { NestFactory } from '@nestjs/core';

import { NestExpressApplication } from '@nestjs/platform-express';

import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(

    AppModule,

  );

  app.useStaticAssets(join(__dirname, '..', 'public'));

  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  const hbs = require('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  app.setViewEngine('hbs');

  let port = parseInt(process.env.PORT) || 3000;

  await app.listen(port);

}

bootstrap();