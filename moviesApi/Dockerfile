#Partie 1
FROM node:latest as node
WORKDIR /moviesApi
COPY . .
RUN npm install 
RUN npm run build --optimization=false

#Partie 2
FROM nginx:latest 
COPY --from=node /moviesApi/dist/moviesApi /usr/share/nginx/html