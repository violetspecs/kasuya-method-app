if(!self.define){let e,c={};const a=(a,i)=>(a=new URL(a+".js",i).href,c[a]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=c,document.head.appendChild(e)}else e=a,importScripts(a),c()})).then((()=>{let e=c[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(c[n])return;let f={};const o=e=>a(e,n),r={module:{uri:n},exports:f,require:o};c[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(s(...e),f)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kasuya-method-app"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/DefaultLayout.4ad38531.js",revision:"43e0f8cb916755e38727fd67a0af8e4a"},{url:"assets/dom.303531e5.js",revision:"581722deb38e4201e4112b7e9e728d6e"},{url:"assets/ErrorNotFound.22a069fa.js",revision:"3942a9d9f55235fc343acaed85b60dc5"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.821745d0.css",revision:"3db70b5fcebc6829ca9fcb31928827a0"},{url:"assets/index.f1ec3192.js",revision:"0178a671067777b3a67ccb10ba2d58d3"},{url:"assets/IndexPage.1f125c6d.css",revision:"73f2380d52dab76ed44eb52e2089e94a"},{url:"assets/IndexPage.e59abc87.js",revision:"147f8b1c811d265f9b7fde37c8361769"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/QBtn.4c45a90a.js",revision:"987bbc06b65f73cc5d1cfde7d882b63a"},{url:"favicon.ico",revision:"a73a3863575f91021de2ab954a98c5f5"},{url:"icons/apple-icon-120x120.png",revision:"e266ede9613f22b478276393b3eeeb11"},{url:"icons/apple-icon-152x152.png",revision:"ede124a31ba41745446b0445ca89d007"},{url:"icons/apple-icon-167x167.png",revision:"ef9b5c0f0d340539f4821f1f5cb3a6c5"},{url:"icons/apple-icon-180x180.png",revision:"3cbf9702226fc3bc8be12e1a283cae56"},{url:"icons/apple-launch-1125x2436.png",revision:"ae2266eb84a9a48978affbf7f74a5339"},{url:"icons/apple-launch-1170x2532.png",revision:"b7fdc4b46bda64b0101261ff2b492a1f"},{url:"icons/apple-launch-1242x2208.png",revision:"5a89b0f0bf5145fd8bfd4330a9139b43"},{url:"icons/apple-launch-1242x2688.png",revision:"ccd28346ce9531627c8a464ad83922be"},{url:"icons/apple-launch-1284x2778.png",revision:"21f3fe1dda7aded1646753b07dbec9f7"},{url:"icons/apple-launch-1536x2048.png",revision:"fe848321ac91fef00d8368305c402fca"},{url:"icons/apple-launch-1620x2160.png",revision:"6c26c7ea998a1d23ab507745652210f6"},{url:"icons/apple-launch-1668x2224.png",revision:"61f99e4a5e5690810d9c0388571d5968"},{url:"icons/apple-launch-1668x2388.png",revision:"6ce0b53a96598b469475340c9f3662a5"},{url:"icons/apple-launch-2048x2732.png",revision:"3355f650e8efc2cd1bf0d89c96187270"},{url:"icons/apple-launch-750x1334.png",revision:"6ebd5d7df702a31888ea2daab573559c"},{url:"icons/apple-launch-828x1792.png",revision:"1b0f2f444d72ba8d1fdc457ff13127e4"},{url:"icons/favicon-128x128.png",revision:"16d5835fe28ec8c21d4b9e29f7154af6"},{url:"icons/favicon-16x16.png",revision:"a1083b92e12f524c973263c5f447a4c9"},{url:"icons/favicon-32x32.png",revision:"ceb66dcae9af040274a7ec0bac5387e5"},{url:"icons/favicon-96x96.png",revision:"9310b5ab77e32160808708190a4b2347"},{url:"icons/icon-128x128.png",revision:"16d5835fe28ec8c21d4b9e29f7154af6"},{url:"icons/icon-192x192.png",revision:"0c72f4ba4ead0926615ac4d316ef464f"},{url:"icons/icon-256x256.png",revision:"58d14fea288e117f43c040b64c94999d"},{url:"icons/icon-384x384.png",revision:"1a5486656a354d8c0d544f08bf876cfb"},{url:"icons/icon-512x512.png",revision:"f4b05907e381b4db3905c2b021aa4339"},{url:"icons/ms-icon-144x144.png",revision:"c502ac9dc4616b1d736e09acf42b1694"},{url:"icons/safari-pinned-tab.svg",revision:"ff36b278c1f0ee580c6a03e667a6e3da"},{url:"index.html",revision:"7ad66a501f1c74119d24413be8bf080b"},{url:"manifest.json",revision:"d7427aa80e4627a22d21a6f98731f8e6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
