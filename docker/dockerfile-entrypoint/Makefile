build:
	docker build -t ctop .
run:
	docker run -it ctop
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
