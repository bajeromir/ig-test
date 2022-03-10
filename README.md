# ig-test
---
## Running project 
To install dependencies just run `npm install` and `npm run clientinstall` for client dependencies. 
(Why is there client and server? Answer is at the end)

Then just run `npm run dev` and after few moments new browser tab will open and show fetched data.

## Other commands
To run only server run `npm run server`\
To run only client run `npm run client`\
To run test run `npm run test`


#### Why is there client and server in this project?
API server replies don't have *Access-Controll-Allow-Origin* set in header and because of that browser shows CORS error. 
I didn't have access to the API server so I made a proxy that passed data from API to my frontend.