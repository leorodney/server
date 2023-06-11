# Dockerize the auth microservice container
FROM  node:latest

# Create app directory
WORKDIR /prompts

# copy source code
COPY . .

# install dependencies build the microservice container
RUN npm install
RUN npm run build

# expose port 7000
EXPOSE 7000

# start the microservice container
CMD [ "npm", "start" ]