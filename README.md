# Blogful API

## Scripts

1. Start the application `npm start`
2. Start nodemon for the application `npm run dev`
3. Run the tests in watch mode `npm test`
4. Migrate the database at `DATABASE_URL`, with `npm run migrate:test`
5. Migrate the tests (at `TEST_DATABASE_URL`), with `npm run migrate:test`

## Env setup

Remember to create a .env file with `DATABASE_URL` and `TEST_DATABASE_URL`.

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.