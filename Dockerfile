FROM node:8
FROM resin/rpi-raspbian:latest

# create app directory
WORKDIR /app

RUN apt-get -y update && \
      apt-get -y install android-tools-adb


COPY . .

EXPOSE 5000

CMD [ "node", "./server/server.js"]