#!/bin/sh
git checkout -b gh-pages
git rm cd.html Home.md index.md outline.html outline.md Procfile package.json server.js gulpfile.js
git commit -m "For publishing on gh-pages"
git push github gh-pages