FROM node:16 as gateway
WORKDIR /usr/src/app/gateway
COPY package*.json ./
COPY . .
RUN yarn
EXPOSE 8080
CMD ["yarn", "start:dev"]
