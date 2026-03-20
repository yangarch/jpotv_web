#!/bin/bash

# SSH 키 설정
mkdir -p /root/.ssh
chmod 600 /root/.ssh/id_rsa

# 필요한 초기화 스크립트 실행
/config/fetch_file.sh

cron

# React 애플리케이션 실행
exec npm start
