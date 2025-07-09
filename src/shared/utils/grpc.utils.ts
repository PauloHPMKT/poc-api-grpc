// import { Metadata } from "@grpc/grpc-js";
// import { INestApplication } from "@nestjs/common";
// import { MicroserviceOptions, Transport } from "@nestjs/microservices";

// export class GRPCUtils {
//     public static registerGRPCPackage(
//         app: INestApplication,
//         packageName: string[],
//         protoPath: string[],
//         maxReceiveMessageLength: number
//     ) {
//         app.connectMicroservice<MicroserviceOptions>({
//             transport: Transport.GRPC,
//             options: {
//                 package: packageName,
//                 protoPath: protoPath,
//                 url: "0.0.0.0:50041",
//                 maxReceiveMessageLength,
//             }
//         })
//     }

//     public static metadataToObject<T extends Record<string, any>>(
//         metadata: Metadata,
//         innerType: new (init?: Partial<T>) => T
//     ) {
//         const clone = new innerType();

//         Object.keys(clone).forEach((key) => {
//             key = key.replace('_', '');

//             if (Reflect.has(metadata.getMap(), key.toLocaleLowerCase())) {
//                 Reflect.set(clone, key, metadata.get(key)[0]);
//             }
//         });

//         return clone;
//     }
// }