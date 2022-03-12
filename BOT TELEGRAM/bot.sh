#!/bin/bash

USERID="ID_USUARIO"
TOKEN="BOT_TOKEN"
URL="https://api.telegram.org/bot$TOKEN/sendMessage"

MENSAJE_INI="El Sistema Se Ha Encendido: $fecha"
MENSAJE_FIN="El Sistema Se Ha Apagado: $fecha"

ini(){
    curl -s -X POST $URL -d chat_id=$USERID -d text="$MENSAJE_INI"
}

fin(){
    curl -s -X POST $URL -d chat_id=$USERID -d text="$MENSAJE_FIN"
}

case $1 in
    $fecha = $(date +"%d/%m/%Y %T")
    ini|fin) "$1" ;;
esac