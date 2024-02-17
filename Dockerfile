# default image setting
# cause of web1's circumstances, need to use bullseye image.
FROM python:3.10.13

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 Python 모듈 설치
COPY ./app /app

RUN pip install uvicorn Flask
RUN pip install --no-cache-dir -r latest.txt
RUN pip install gunicorn uvicorn[standard]


# Uvicorn 서버 실행
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80", "--reload"]

EXPOSE 8000

# Gunicorn으로 Uvicorn 워커 실행
CMD ["gunicorn", "main:app", "-w", "4", "-b", "0.0.0.0:8000"]