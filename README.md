# Website Testing Pack

The goal is this package is to provide some automated tests for websites that are up and running already. Currently it supports:

-   Checking if a site loads
-   Making sure the site has a Google Analytics snippet and it is configured with an ID

## Usage

Clone this repo

```bash
git clone https://github.com/resknow/website-testing-pack.git
npm install
```

Modify `cypress.json` with the URLs you want to test. The `sites` key should an array of objects, each with a `domain` key. It's setup this way so in future we can easily extend it with more information is we want to. Something like a `shouldTestAnalytics` boolean for each site, for example, which could then we used as a condition inside the test.

```json
{
	"sites": [{ "domain": "example.co.uk" }]
}
```

Run Cypress

```bash
npm run test
```

Cypress will boot up and you can then run the tests you need.
