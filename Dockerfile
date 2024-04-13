
ARG NODE_VERSION=20.11.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon

USER node

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
