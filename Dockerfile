FROM node:16-alpine

RUN mkdir /app

COPY . /app/

WORKDIR /app
RUN npm install
RUN npm test

CMD node /app/index.js
