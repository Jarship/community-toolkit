FROM node:16

RUN node --version
RUN yarn --version
RUN yarn cache clean

RUN mkdir /app
WORKDIR /app

RUN ls -al
COPY package.json .
COPY api/package.json ./api/package.json
COPY web/package.json ./web/package.json
COPY yarn.lock .
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml

RUN ls -alR
RUN yarn install
RUN ls -al
COPY . .
RUN ls -al

RUN yarn rw build

CMD ["yarn", "rw", "serve"]