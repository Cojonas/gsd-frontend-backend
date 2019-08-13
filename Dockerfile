FROM node:8 as build



# create app directory
WORKDIR /app

RUN apt-get -y update && \
      apt-get -y install android-tools-adb

COPY package*.json ./
RUN npm install --silent

COPY . .

EXPOSE 5000

CMD [ "node", "server.js"]

