import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('ANALYTIC-SERVICE START');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'reportsPackage',
        protoPath: join(process.cwd(), 'src', 'proto', 'reports.proto'),
        url: '0.0.0.0:50041',
      },
    },
  );

  await app
    .listen()
    .then(() => logger.log('gRPC server is running on 0.0.0.0:50041'))
    .catch((error) => logger.error('Error starting gRPC server:', error));
}
bootstrap();
