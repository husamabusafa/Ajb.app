FROM node:19.3.0-alpine
ENV PORT 8080
EXPOSE 8080

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#COPY package.json .
#RUN npm install
RUN npm install serve -g

COPY dist/ /usr/src/app/dist
RUN ls -la /usr/src/app/dist/*
#RUN npm run build

CMD ["serve", "-s" ,"dist" ,"-p" ,"8080"]