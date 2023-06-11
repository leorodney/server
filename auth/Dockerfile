# Dockerize the auth microservice container
FROM  node:latest

# Create app directory
WORKDIR /auth

# copy source code
COPY . .

# install dependencies build the microservice container
RUN npm install
RUN npm run build

# expose port 4000
EXPOSE 4000

# start the microservice container
CMD [ "npm", "start" ]