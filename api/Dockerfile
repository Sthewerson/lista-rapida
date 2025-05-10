FROM node:23-slim

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["nodemon", "server.js"]
