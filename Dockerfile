FROM node:18-alpine as builder
LABEL authors="Iulian Farcas"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS server
LABEL authors="Iulian Farcas"
WORKDIR /app
COPY package* ./
RUN npm install --production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 8888
CMD ["npm", "start"]
