# step 1
FROM node:16

# step 2
WORKDIR /usr/src/app

# step 3
RUN git clone http://github.com/LeeMyungdeok/docker-repository
WORKDIR docker-repository/worldcup
RUN npm install

# step 4
EXPOSE 8000

# step 5
CMD ["node", "app.js"]
