#!/bin/bash

opt1=$1
opt2=$2

if [ $# -eq 2 ]; then
	if [ $opt1 == 'test' -a $opt2 == 'aaa' ]; then 
		echo good
	elif [ $opt2 == 'test' -a $opt1 == 'aaa' ]; then
		echo good
	else
		echo bad
	fi
else 
	echo "bad"
fi

