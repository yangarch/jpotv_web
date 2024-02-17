#!/bin/bash

# 필요한 초기화 스크립트 실행
/config/fetch_file.sh

cron

# gunicorn으로 애플리케이션 실행
exec gunicorn main:app -w 4 -b 0.0.0.0:8000
