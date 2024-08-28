echo "________             ______             _____               ___________"
echo "___  __ \_______________  /__________  ____(_)_____________ ___  /__  /"
echo "__  / / /  _ \__  __ \_  /_  __ \_  / / /_  /__  __ \_  __ \`/_  /__  / "
echo "_  /_/ //  __/_  /_/ /  / / /_/ /  /_/ /_  / _  / / /  /_/ / /_/  /_/  "
echo "/_____/ \___/_  .___//_/  \____/_\__, / /_/  /_/ /_/_\__, / (_)  (_)   "
echo "             /_/                /____/              /____/             "

# Displays lines
set -x

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
