#!bin/bash
docker login docker.pkg.github.com -u $(git config user.name) -p $(cat ~/.github_token)
docker-compose --file docker-compose.auth.yml up
