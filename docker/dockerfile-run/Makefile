build:
	docker build -t run-sample .
history:
	docker history run-sample
exec:
	docker exec -it myreact /bin/bash
ps:
	docker ps -a
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
