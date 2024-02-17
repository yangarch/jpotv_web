# default image setting
# cause of web1's circumstances, need to use bullseye image.
FROM python:3.10.13

RUN apt-get update && apt-get install -y cron

COPY ./config /config
# crontab.txt 파일을 컨테이너 내부에 복사
COPY ./config/crontab.txt /etc/cron.d/crontab.txt
COPY start.sh /start.sh

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 Python 모듈 설치
COPY ./app /app

RUN pip install Flask
RUN pip install --no-cache-dir -r latest.txt
RUN pip install gunicorn

# SSH 키 추가
ADD .ssh/id_rsa /root/.ssh/id_rsa
ADD .ssh/id_rsa.pub /root/.ssh/id_rsa.pub

# 필요한 경우 권한 설정
RUN chmod 600 /root/.ssh/id_rsa && \
    chmod 644 /root/.ssh/id_rsa.pub && \
    ssh-keyscan 192.168.50.176 >> /root/.ssh/known_hosts

RUN chmod +x /config/fetch_file.sh

# 파일 권한 설정 및 Crontab에 작업 등록
RUN chmod 0644 /etc/cron.d/crontab.txt \
    && crontab /etc/cron.d/crontab.txt

EXPOSE 8000
RUN chmod +x /start.sh
CMD ["/start.sh"]