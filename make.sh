brunch build --production
git checkout gh-pages
rm -rf ./contact-us ./css ./fonts ./js
git merge master
<<<<<<< HEAD
rm -rf app
mv docs/* .
=======
mv public/* .
>>>>>>> master
