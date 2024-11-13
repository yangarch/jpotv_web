FROM node:18

RUN apt-get update && \
    apt-get install -y cron && \
    apt-get clean

COPY ./config /config
COPY ./config/crontab.txt /etc/cron.d/crontab.txt
COPY start.sh /start.sh

RUN chmod +x /config/fetch_file.sh

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start
