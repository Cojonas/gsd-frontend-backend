FROM balenalib/armv7hf-debian

RUN [ "cross-build-start" ]
RUN apt-get -y update && \
      apt-get -y install android-tools-adb
RUN [ "cross-build-end" ]


FROM node:8

# create app directory
WORKDIR /app



COPY . .

EXPOSE 5000

CMD [ "node", "./server/server.js"]