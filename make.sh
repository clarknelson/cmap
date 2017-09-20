brunch build --production
git checkout gh-pages
git merge master
mv public/* .
