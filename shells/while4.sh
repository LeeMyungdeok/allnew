# !/bin/bash

row=$1

if [ $# -eq 0 ]; then
	echo "Hi"
else
	while [[ 11 -gt $row ]]; do
		echo $row
		row=`echo "$row"+1|bc`
	done
fi
