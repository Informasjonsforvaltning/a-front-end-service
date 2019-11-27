# An example for a frontend service

## Running the application

- `npm run start`
- `npm run start:with-mock`

## Running in docker

- `docker image build -t a-frontend-service:1.0.0 .`
- `docker container run -p 8137:8000 --name frontend a-frontend-service:1.0.0`
