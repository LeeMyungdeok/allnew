#!/bin/bash

if [ $# -eq 0 ]; then
	echo Enter the coltry name~!!
else
	case "$1" in
		ko) echo "Seoul" ;;
		us) echo "Washington" ;;
		cn) echo "Beijing" ;;
		jp) echo "Tokyo" ;;
		*) echo "Your entery=> $1 is not the list" ;;	
	esac
fi
