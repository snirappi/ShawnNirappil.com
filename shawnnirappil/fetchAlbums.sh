#!/bin/bash
DIR=./src/static/
FILE=albums.jpg
cd $DIR
curl -sSL -o ${FILE} 'https://tapmusic.net/collage.php?user=beat80&type=7day&size=3x3&caption=true'