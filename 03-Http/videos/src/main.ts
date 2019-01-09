import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
const FileStore = require('session-file-store')(session);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.set('view engine', 'ejs');

  app.use(
    session({
      name: 'server-session-id',
      secret: 'No sera de tomar un traguito',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
      store: new FileStore()
    })
  );

  await app.listen(5000);
}
bootstrap();
