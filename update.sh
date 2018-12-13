git add .
git commit -m "update"
git push


echo -e "\033[0;32mDeploying new blog...\033[0m"

echo -e "\033[0;32mChanging to blog directory...\033[0m"
cd ../dynamicmetaflow.github.io/
git add .

echo -e "\033[0;32mCommit and push the new build...\033[0m"
git commit -am "New Blog Build (`date`)"
git push

echo -e "\033[0;32mDeploy complete.\033[0m"


