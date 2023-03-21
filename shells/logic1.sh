#!/bin/bash

opt1=$1
opt2=$2
if [ $opt1 == 'test' -o $opt1 == 'aaa' ]; then 
	echo good
elif [ $opt2 == 'test' -o $opt2 == 'aaa' ]; then
	echo good
else
	echo bad
fi

