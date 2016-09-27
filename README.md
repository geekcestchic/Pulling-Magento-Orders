#### Setup Steps:
* Clone the directory to your machine, cd into it
* Make sure your machine has `node` and `npm` installed
* Run `npm install` in your console
* Run `npm run start`
* To see tests, run `npm test` in your console (these will be based off snapshots saved in /lib/web/__tests__/__snapshots__, if they are outdated, blank the file and re-run to create fresh snapshots, If the change is expected you can invoke Jest with jest -u to overwrite the existing snapshot.) 

**Note**: If Chrome throws a X-Domain error, close chrome and type this in your console "open /Applications/Google\ Chrome.app --args --disable-web-security --user-data-dir"
Warning, this will allow for X-domain access, so ensure you don't have too many random tabs open while testing the app
