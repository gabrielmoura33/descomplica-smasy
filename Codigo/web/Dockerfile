FROM node:17 as ui-build
WORKDIR /usr/src/app/web
COPY package*.json ./
COPY . .
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "dev"]
