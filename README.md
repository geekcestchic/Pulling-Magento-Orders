#### Setup Steps:
* Clone the directory to your machine, cd into it
* Make sure your machine has `node` and `npm` installed
* Run `npm install` in your console
* Run `npm run start`
* To see tests, run `npm test` in your console (these will be based off snapshots saved in /lib/web/__tests__/__snapshots__, if they are outdated, blank the file and re-run to create fresh snapshots, If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.)

#### Tech Used:
* React: Front-end rendering
* Node: Sprucing up the server
* Webpack: Hot reloading
* Axios: API requests
* API Cache: Node module that allows to cache responses for a certain amount of time
* Babel: In order to compile and write the front-end in ES6
* Jest: For React testing, in confjunction with React Test Renderer
* Magento API: To access the magento order data

#### About the Application
The App's front-end than has a wrapper component which makes a request to the back-end endpoint which makes the request to the Magento API. After a first API call, the data is cached for 5min to save up on server request efforts.

The List of Orders returned is rendered into a duplicated component class and onClick events are added which then show more in-depth information on the order.

**Note**: If Chrome throws a X-Domain error upon the request to the magento API, close chrome and type this in your console "open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir"
Warning, this will allow for X-domain access, so ensure you don't have too many random tabs open while testing the app
