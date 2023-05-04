# Dockerize the auth microservice container
FROM  node:latest

# Create app directory
WORKDIR /app/prompts

# copy package.json and package-lock.json
COPY package*.json ./

# copy source code
COPY . .

# install dependencies
RUN npm install

# expose port 8000
EXPOSE 8000

# start the microservice container
CMD [ "npm", "start" ]