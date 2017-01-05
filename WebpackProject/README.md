# Static Page

### Surge

1. `yarn global add surge`
2. `surge -p dist`

### Github Pages

1. `git checkout -b gh-pages`
2. `git subtree push --prefix dist origin gh-pages`

### Aws S3

1. `yarn global add s3-website`
2. Put key on `.env` file in the root folder
3. s3-website create webpack-deploy
4. s3-website deploy dist

---

# Servers

### Heroku

1. Create a Procfile file in the root
2. heroku create
3. git push heroku master
4. heroku open

### Aws EB

1. Install cli `brew install awsebcli`
2. eb init
3. eb create
4  eb open