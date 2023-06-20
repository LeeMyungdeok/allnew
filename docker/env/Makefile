build:
	docker build -t ubuntu .
run:
	docker run -it -d --name ubuntu ubuntu
history:
	docker run
inspect:
	docker inspect ubuntu | grep Health
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
