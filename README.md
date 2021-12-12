aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 320811592973.dkr.ecr.us-east-2.amazonaws.com/tech-skills-repo

320811592973.dkr.ecr.us-east-2.amazonaws.com/tech-skills-repo

docker tag tech-skills:latest 320811592973.dkr.ecr.us-east-2.amazonaws.com/tech-skills-repo:v1
docker push 320811592973.dkr.ecr.us-east-2.amazonaws.com/tech-skills-repo:v1