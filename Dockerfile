FROM node:8 as build

# create app directory
WORKDIR /app

RUN apt-get -y update && \
      apt-get -y install android-tools-adb

COPY /server/package*.json ./server/
RUN cd ./server && npm install --silent

COPY . .

EXPOSE 5000

CMD [ "node", "./server/server.js"]