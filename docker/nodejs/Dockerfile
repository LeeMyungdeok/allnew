# step 1
FROM node:16.20

# step 2
WORKDIR '/root'

# step 3
COPY package*.json ./
RUN npm install express

# step 4
COPY hello.js .

# step 5
EXPOSE 8000

# step 6
CMD ["node", "hello.js"]
