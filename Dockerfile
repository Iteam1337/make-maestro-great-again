FROM node:10

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app
RUN npm install --production

COPY /lib /app/lib

CMD npm start
