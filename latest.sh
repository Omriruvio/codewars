#!/bin/bash

CURRENT_DIR='./'
FILE_EXT='*.js'

get_recent_file () {
    FILE=$(ls -Art1 ${CURRENT_DIR}${FILE_EXT} | tail -n 1)
    if [ ! -f ${FILE} ]; then
        CURRENT_DIR="${CURRENT_DIR}/${FILE}"
        get_recent_file
    fi
    echo "Running file ${FILE}"
    nodemon ${FILE}
    exit
}
get_recent_file