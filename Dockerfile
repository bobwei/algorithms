FROM node:8.11.4

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

ENV PATH ./node_modules/.bin:$PATH

RUN yarn build

CMD [ "yarn", "start" ]
