# Journey API Proxy

Add the following lines to your `.bash_profile`, `.zshrc` or `.bashrc` file (try `.bash_profile` first, if you have all of them):

```
export JOURNEY_TOKEN_URL="url"
export JOURNEY_TOKEN_CLIENT_ID="client-id"
export JOURNEY_TOKEN_CLIENT_SECRET="s3cr3t"
export JOURNEY_TOKEN_CLIENT_WSG_CREDENTIALS='wsg-credentials'
export JOURNEY_LOCATIONS_URL="url"
export JOURNEY_LOCATIONS_TRIPS="url"
```

Then run the following commands:

```
npm install
PORT=8080 node index.js
```

Then you can test the API as follows:

```console
curl http://localhost:8080/station-search/zurich
curl http://localhost:8080/station-search/bern

curl http://localhost:8080/from/8503000/to/8507000
```
