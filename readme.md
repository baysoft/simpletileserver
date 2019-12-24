# Simple Preprocessed Map Tile Server

This app is intended to be as simple as possible for hosting preprocessed map tiles.

The client app is developed using leaflet.js for demonstrational purpose only.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone git@github.com:baysoft/simpletileserver.git # or clone your own fork
$ cd simpletileserver
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Documentation

The tile can be accessed using this url:
```sh
http://localhost:3000/${layer}/${z}/${x}/${y}.png
```
> ***${layer}*** refers to physical _layer_ folder on root directory (it's 'tiles' folder in this demo).

example:
```sh
http://localhost:3000/tiles/6/48/30.png
```

If you want to add some other layer tiles sources ie: _'satellite'_, than you have to create _'satellite'_ folder on root directory than copy all the satellite tiles there.
Now you can access your _'satellite'_ layer using the url below:
```sh
http://localhost:3000/satellite/6/48/30.png
```
It's easy right?

> Please beware that tile files can be huge both in size and number depends on your mapped region, for example tiles for Indonesia with zoom level 0 - 19 will consume your storage space for about 350GB!

For more information about using Node.js and Leaflet, see these articles:

-   [Leaflet Tutorials](https://leafletjs.com/examples.html)
-   [Node.js Guides](https://nodejs.org/en/docs/guides/)
