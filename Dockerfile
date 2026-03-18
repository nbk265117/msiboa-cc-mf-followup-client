FROM node:16.17.1 as build-deps
WORKDIR /usr/src/app
COPY . ./

# Stage 1 - build the app
RUN npm install
RUN npx ng build --configuration production

# Stage 2 - nginx
FROM nginx:stable-alpine3.17
COPY --from=build-deps /usr/src/app/dist/msiboa-cc-mf-followup-client /usr/share/nginx/html

# Stage 3 - nginx conf
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
