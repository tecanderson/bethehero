
To run this Project Just Download it and Run

## Getting Started

First, let’s make sure that your development environment is ready.

- If you don’t have **Node.js** installed, [install it from here](https://nodejs.org/).

Then configure your development environment from the `.env.example` file and install the dependencies from your project’s `package.json` file by running the following command:

```
npm install
```

Once your dependencies are installed, in order to run all Knex.js migrations and build your application's database schema, execute the `migrate` command:

```
npm run migrate
```

After building your database, you may use the `db:seed` command to seed it.

```
npm run db:seed
```

Finally, the `serve` script starts your Node.js "development server" on port 8000.

```
npm run serve
```

That’s it! :rocket:  
If you have questions about BeTheHero API, you can ask on [GitHub Issues](https://github.com/tecanderson/bethehero/issues).
