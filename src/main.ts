import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

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

  await app.listen();
  console.log('✅ gRPC server listening on 0.0.0.0:50041');
}
bootstrap();
