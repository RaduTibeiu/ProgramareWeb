FROM node:14

WORKDIR /ProiectPw
COPY package.json .
RUN npm install
COPY . .
EXPOSE 6868
CMD npm start
