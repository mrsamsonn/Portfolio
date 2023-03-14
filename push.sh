git branch -d gh-pages
git push origin --delete gh-pages

npm run build
git add dist -f

echo "Commit Message: "
read commit

git commit -m "'"$commit"'"

git subtree push --prefix dist origin gh-pages