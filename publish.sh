hugo --minify
mkdir /tmp/hugo-tmp
/bin/cp -fr public/* /tmp/hugo-tmp

git switch gh-pages
git add .
git commit -m "New Auto Deploy"
git push origin gh-pages
