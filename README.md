# Run app locally

From the command line run the following. The stripe listen one will send successful payment responses to the endpoint

1. yarn dev
2. stripe listen --forward-to localhost:3000/api/webhook
