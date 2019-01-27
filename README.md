[![Build Status](https://travis-ci.org/AnthonyPengelly/jimmy-and-the-as.svg?branch=master)](https://travis-ci.org/AnthonyPengelly/jimmy-and-the-as)
# Jimmy & The As

## Dev Setup
* Install NPM and Node
* Run `npm install`
* Run `npm start` to start up a web server with live reloading
* Visit http://localhost:8081

## Deployment
CI is performed by travis here: https://travis-ci.org/AnthonyPengelly/jimmy-and-the-as
The static assets are deployed straight to an S3 bucket which is served up to users.

## Adding content
### Images
* Add the image to the folder called /public/images/
* Add a thumbnail to the same folder, ideally with `-thumbnail` appended to the file name.
You can use http://resizeimage.net/ to generate thumbnails, using a width of 280px
* Create an entry in /src/assets/images.ts

### News
* Add a news item by adding an entry to /src/assets/news.ts