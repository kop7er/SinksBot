FROM node:16

ARG bot_token

ENV BOT_TOKEN=$bot_token

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install typescript -g

RUN npm fund

COPY . .

RUN npm run build

COPY . .

CMD [ "npm", "start" ]