# !/bin/bash

a=1

while [ $a != "0" ]; do
	echo -n "input : "
	read a
	
	if [ $a > "9" ]; then
		break

	else
		if [ $a != "0" ]; then
			for k in 1 2 3 4 5 6 7 8 9
			do
				dcho " $a  * $k = `expr $a \* sk`"
			done
		fi
	fi	
done
echo Exit
