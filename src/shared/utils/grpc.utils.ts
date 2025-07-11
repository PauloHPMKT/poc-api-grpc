import { Metadata } from '@grpc/grpc-js';
import { GrpcOptions, Transport } from '@nestjs/microservices';

export class GRPCUtils {
  public static registerGRPCPackage(
    packageName: string[],
    protoPath: string[],
    url: string,
  ): GrpcOptions {
    return {
      transport: Transport.GRPC,
      options: {
        package: packageName,
        protoPath: protoPath,
        url,
      },
    };
  }

  public static metadataToObject<T extends Record<string, any>>(
    metadata: Metadata,
    innerType: new (init?: Partial<T>) => T,
  ) {
    const clone = new innerType();

    Object.keys(clone).forEach((key) => {
      key = key.replace('_', '');

      if (Reflect.has(metadata.getMap(), key.toLocaleLowerCase())) {
        Reflect.set(clone, key, metadata.get(key)[0]);
      }
    });

    return clone;
  }
}
