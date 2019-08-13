FROM node:8 as build



# create app directory
WORKDIR /app

RUN apt-get -y update && \
      apt-get -y install android-tools-adb

COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent


COPY . /app
RUN npm install /app/client --silent

RUN cd /app/client && react-scripts build


EXPOSE 5000

CMD [ "npm", "start"]

