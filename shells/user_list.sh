#!/bin/bash

cnt=1

cat /etc/passwd file | while IFS=":" read -r usernaem pw uid gid comment home shell
do
	echo $cnt : ""$username"-"$uid"-"$gid"-"$home"-"$shell""
	let cnt+=1
done
