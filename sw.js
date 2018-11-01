/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3aae9d26d17dcd92f04b.js"
  },
  {
    "url": "app-d9933cf09ff4e23b481f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-bb30891be4007fe2b0e4.js"
  },
  {
    "url": "index.html",
    "revision": "e8fb767173e57a48a0a094b45a45d3dd"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "77cb3694fcf8c378731429dd9a6d0b81"
  },
  {
    "url": "9.dd058a97a4c4a6d44dbc.css"
  },
  {
    "url": "component---src-pages-index-jsx.7a23a860a54cd4cb232c.css"
  },
  {
    "url": "component---src-pages-index-jsx-00c4e3be5a4229e8f458.js"
  },
  {
    "url": "9-d7ef4ed6e50689ea43e8.js"
  },
  {
    "url": "0-5138eb0092f536ebc25a.js"
  },
  {
    "url": "static/d/363/path---index-6a9-ZK1GEJuGZNFylvi0sVF8tg9Lpx8.json",
    "revision": "cd6cf2bf30e854df5c7aa4f15c153994"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "fae9adff2ccafc80cb7f48ccf6eea329"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/portfolio/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});