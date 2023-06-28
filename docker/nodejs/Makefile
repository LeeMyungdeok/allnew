build:
	docker build -t node .
run:
	docker run -it -d -p 8000:8000 -v /Users/all/app --name node node
exec:
	docker exec -it node /bin/bash
logs:
	docker logs node
ps:
	docker ps 
img:
	docker images
rm:
	docker rm -f $$(docker ps -aq)
rmi:
	docker rmi $$(docker images -q)
