#!/bin/bash

# 원격 서버의 사용자명과 IP 주소 설정
REMOTE_USER="Archmacmini"
REMOTE_IP="192.168.50.176"

# 원격 서버에서 가져올 파일의 경로
REMOTE_FILE_PATH="/Users/archmacmini/Project/jpotv/result/output.json"

# 로컬에서 파일을 저장할 경로
LOCAL_SAVE_PATH="/app/data/result/output.json"

# SCP를 사용하여 파일 전송
scp "$REMOTE_USER@$REMOTE_IP:$REMOTE_FILE_PATH" "$LOCAL_SAVE_PATH"