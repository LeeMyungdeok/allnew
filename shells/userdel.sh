#!/bin/bash

i=1
cnt=$1

while [ $i -le $cnt ]; do
	let i+=1
	userdel -r user$i
done
