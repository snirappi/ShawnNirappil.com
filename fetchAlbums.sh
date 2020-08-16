#!/bin/bash
DIR=./shawnnirappil/src/static/
FILE=albums.jpg
cd $DIR
curl -sSL -o ${FILE} 'https://tapmusic.net/collage.php?user=beat80&type=1month&size=4x4&caption=true'