FROM node:18

RUN apt-get update && apt-get install -y cron openssh-client

COPY ./config /config
COPY ./config/crontab.txt /etc/cron.d/crontab.txt
COPY start.sh /start.sh

RUN chmod +x /config/fetch_file.sh

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# 파일 권한 설정 및 Crontab에 작업 등록
RUN chmod 0644 /etc/cron.d/crontab.txt \
    && crontab /etc/cron.d/crontab.txt

EXPOSE 3000
RUN chmod +x /start.sh
CMD ["/start.sh"]
