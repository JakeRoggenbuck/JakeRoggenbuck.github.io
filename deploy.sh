# Use hugo built from source
~/Build/hugo/hugo --minify
mkdir /tmp/hugo-tmp
/bin/cp -fr public/* /tmp/hugo-tmp

git switch gh-pages
/bin/cp -fr /tmp/hugo-tmp/* .

git add .
git commit -m "New Auto Deploy"
git push origin gh-pages

rm -rf /tmp/hugo-tmp
git switch main
