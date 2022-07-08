FROM node:16-alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 8000
ENTRYPOINT ["node", "server.js"]
