# setup the reverse proxy container
FROM nginx:latest

# copy nginx configuration file
COPY nginx.conf /etc/nginx/default.conf

# expose port 80
EXPOSE 80

# start the reverse proxy container
# CMD ["nginx", "-g", "daemon off;"]