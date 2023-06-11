# Dockerize the auth microservice container
FROM  node:latest

# Create app directory
WORKDIR /promptify

# copy source code
COPY . .

# install dependencies build the microservice container
RUN npm install
RUN npm run build

# expose port 6000
EXPOSE 6000

# start the microservice container
CMD [ "npm", "start" ]