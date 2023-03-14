git branch -d gh-pages
git push origin --delete gh-pages

echo "Commit Message: "
read commit

git commit -m "'"$commit"'"
git push

npm run build
git add dist -f

git commit -m "'"$commit"'"

git subtree push --prefix dist origin gh-pages
git push