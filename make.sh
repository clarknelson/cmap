brunch build --production
git checkout gh-pages
git merge master
<<<<<<< HEAD
rm -rf app
mv docs/* .
=======
mv public/* .
>>>>>>> master
