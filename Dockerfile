
FROM node:16
WORKDIR /app
COPY yarn.lock package.json package-lock.json ./

RUN yarn 

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
