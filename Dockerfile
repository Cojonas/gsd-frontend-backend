FROM balenalib/armv7hf-debian

RUN [ "cross-build-start" ]
RUN apt-get -y update && \
      apt-get -y install android-tools-adb && apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo


RUN sudo mkdir -p /var/lib/docker-shared && sudo chmod -R 0777 /var/lib/docker-shared


RUN [ "cross-build-end" ]

FROM node:8

# create app directory
WORKDIR /app

COPY . .

EXPOSE 5000

CMD [ "node", "./server/server.js"]
