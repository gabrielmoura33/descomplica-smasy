FROM node:17 as students-service
WORKDIR /usr/src/app/students
COPY package*.json ./
COPY . .
RUN yarn
EXPOSE 3333
CMD ["yarn", "start:dev"]
