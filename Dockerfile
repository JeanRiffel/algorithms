FROM node:17-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "dist/src/infra/web/index.js" ]
EXPOSE 3000

