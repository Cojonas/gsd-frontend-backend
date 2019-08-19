FROM hypriot/rpi-node:8.1.3
#FROM node:8

RUN [ "cross-build-start" ]

RUN apt-get -y update && \
      apt-get -y install android-tools-adb && apt-get -y install sudo

RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo


WORKDIR /app

#install and build client 
COPY client/package.json /app/client/
RUN cd /app/client && npm install --silent
COPY client /app/client
RUN rm -Rf /app/client/dist/* &&  cd /app/client && npm run build



#install server
COPY server/package.json /app/server/
RUN cd /app/server && npm install --silent
COPY server /app/server


# copy client build files to public server folder
RUN mkdir -p /app/server/public/appfiles
RUN rm -Rf /app/server/public/appfiles/* && cp -R /app/client/dist/* /app/server/public/appfiles/


RUN mkdir -p /app/docker-shared
#RUN sudo mkdir -p /var/lib/docker-shared && sudo chmod -R 0777 /var/lib/docker-shared


RUN [ "cross-build-end" ]

EXPOSE 5000

CMD [ "node", "./server/server.js"]
