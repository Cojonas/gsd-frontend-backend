FROM hypriot/rpi-node:8.1.3

RUN [ "cross-build-start" ]
RUN apt-get -y update && \
      apt-get -y install android-tools-adb && apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo


WORKDIR /app

COPY client/package.json /app/client/
RUN cd /app/client && npm install
COPY client /app/client

COPY server/package.json /app/server/
RUN cd /app/server && npm install
COPY server /app/client

COPY . .


RUN sudo mkdir -p /var/lib/docker-shared && sudo chmod -R 0777 /var/lib/docker-shared

RUN [ "cross-build-end" ]

#FROM node:8


EXPOSE 5000

CMD [ "node", "./server/server.js"]
