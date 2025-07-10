FROM node:20

RUN npm install -g @nestjs/cli

RUN apt-get update && apt-get install -y ghostscript

WORKDIR /usr/poc-analitycs-api/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 50041
