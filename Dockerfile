FROM node:11-alpine

COPY package.json /www/package.json
RUN cd /www yarn install

COPY . /www

WORKDIR /www

ENV PORT 80

EXPOSE 80