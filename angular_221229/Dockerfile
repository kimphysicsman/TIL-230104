FROM node:14.21-alpine

RUN mkdir /angular
WORKDIR /angular

RUN npm update & npm install -g @angular/cli@13

COPY package.json package-lock.json ./

COPY . .