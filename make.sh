brunch build --production
git checkout gh-pages
git merge master
rm -rf app
mv docs/* .
