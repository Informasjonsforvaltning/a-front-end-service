# An example for a frontend service

## Running the application

- `npm run start`
- `npm run start:with-mock`

## Running in docker

- `docker image build -t a-frontend-service:1.0.0 .`
- `docker container run -p 8203:8000 --name frontend a-frontend-service:1.0.0`

## Feature testing

High level ui tests are implemented using [codecept with gherkin](https://codecept.io/bdd)

### Initiating codecept with gherkin

```json
"test:feature:init"
```

### Generating new feature file

```json
"test:gen:feature"
```

### Generating steps from feature file

```json
"test:gen:steps"
```
