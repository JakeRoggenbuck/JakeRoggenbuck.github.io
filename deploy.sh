hugo --minify
mkdir /tmp/hugo-tmp

git switch gh-pages
/bin/cp -fr public/* /tmp/hugo-tmp

git add .
git commit -m "New Auto Deploy"
git push origin gh-pages

rm -rf /tmp/hugo-tmp
git switch main
