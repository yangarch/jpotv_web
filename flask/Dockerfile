# default image setting
# cause of web1's circumstances, need to use bullseye image.
FROM python:3.10.13

RUN apt-get update && apt-get install -y cron

COPY ./config /config
# crontab.txt 파일을 컨테이너 내부에 복사
COPY ./config/crontab.txt /etc/cron.d/crontab.txt
COPY start.sh /start.sh

RUN chmod +x /config/fetch_file.sh

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 Python 모듈 설치
COPY ./app /app

RUN pip install Flask
RUN pip install --no-cache-dir -r latest.txt
RUN pip install gunicorn

# 파일 권한 설정 및 Crontab에 작업 등록
RUN chmod 0644 /etc/cron.d/crontab.txt \
    && crontab /etc/cron.d/crontab.txt

EXPOSE 8000
RUN chmod +x /start.sh
CMD ["/start.sh"]