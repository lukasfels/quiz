#!/usr/bin/env sh

# abort on errors
set -e

# build
# base url setzen, falls andere --base=/quiz/
npm run build

# delete old dist and copy new
cd ..
rm -R dist/*
cp -R vueQuiz/dist/* dist/

# navigate into the build output directory
cd dist

cp index.html 404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:lukasfels/quiz.git main:gh-pages
GIT_SSH_COMMAND='ssh -i /home/lukas/.ssh/id_github -o IdentitiesOnly=yes' git push

cd -


