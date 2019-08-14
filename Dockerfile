FROM balenalib/armv7hf-debian



RUN apt-get -y update && \
      apt-get -y install android-tools-adb


FROM node:8

# create app directory
WORKDIR /app



COPY . .

EXPOSE 5000

CMD [ "node", "./server/server.js"]