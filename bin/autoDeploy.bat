call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f git@github.com:Zfeiyang/Zfeiyang.github.io.git main:gh-pages