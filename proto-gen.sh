#!/bin/bash

PROTO_PATH=$PWD/src/shared/domain/proto

rm -rf -f $PROTO_PATH

npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=$PROTO_PATH proto/*.proto
