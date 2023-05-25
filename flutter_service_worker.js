'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "404b678aad814f5365aac3155265ee79",
".git/config": "8f75cc4038f4f1079bffbf353114192f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7b06a25d75fdc0bfcbd687c1707f1a63",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a4534cc8980191db853409816137cc17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e73b676b998ace333eb36869e191d2ee",
".git/logs/refs/heads/master": "e73b676b998ace333eb36869e191d2ee",
".git/logs/refs/remotes/origin/master": "f381f7cc9fc96af2c07638ee60145ecd",
".git/objects/0d/2f578f4bd85898b76bda61772c9a958020e9ea": "ce0ec024328c77bfc6795e80005bbde5",
".git/objects/0e/3ddb37dd476a9f1923346b72703707369739f1": "1872fe39e3be8ed70ace994a347f43fa",
".git/objects/1d/0305b0d27ae7654e13e6b87d19a83c9511a8d5": "18ad836d7cd4db43ce263ba1fa3f8b9f",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/36/aa7a9184007db357e3a79e180800eb5809dd4b": "166cd6207430fac4ad24d2ce4cc54f03",
".git/objects/36/b24b04718fc9f1b82320e77b93de35babb3ed6": "bb1b0460f9f5b883b72dcd1c9947033d",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/52/cfb77a424101413b81e246b965151f443a0e85": "453827b9337fef0116c048dee437d21d",
".git/objects/57/3d6adab3021a1e473cf8fe6fc7acb256cd45fa": "7002e69b6da8c35dfbb429c6c864efb4",
".git/objects/5a/8912d5dd9c262f0bc001036f5ed08aac212c4e": "88bc4c1fbca5619a0973b98ec0cc2ac9",
".git/objects/5c/6f23c6e19c8923ce59b4c18b5125559073bce4": "9e8612b9b31093b78166a2a36d0d4d80",
".git/objects/5f/bd623de67565108c2872f6671cc23cdd1d65dd": "4246c924045c0e6a59e1f9e76e037112",
".git/objects/6b/cf16d5f14dac63a19dae9a06f80ab911d5e58e": "da0d81f7749a148f80be744e3420d6b9",
".git/objects/7e/01873592732e5967383b8e8c5ab66263d60aca": "d6585bed6f2e2b51f5626a733a9bb63f",
".git/objects/86/ab05c7ce9c82cc0736201fdaae3f7622cad52c": "e8c1c6024d001ae21d73e858f599007f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/38b36a3e23588a0209ff4bc5c75a8009cb4f7c": "ee94fb959c309d2cf9b51ce840a4caf4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e3fe11ad69ed762829dc6ec45ed8ba31c910e5": "f26548cd488697b1afe725119e5a7164",
".git/objects/94/354c2f06db29d635afe5fdcfe0457df14a2f8e": "9ab9c91b70a0a598cf64e56734bad9ef",
".git/objects/98/22d597fc5bb008839d75724ad3c7608c9be5d4": "aefe1a507735985f86b5dc44e634bc52",
".git/objects/a9/b7b0a12830c3f3cdb1729e26024cb57d54927e": "f4d7474b5502a9bee7148dbf7f52251d",
".git/objects/ab/befc62a77186eb928e63650268984dcf80d342": "8f6e2a845b3f7e04ed0b55a7f33d4fb9",
".git/objects/b0/88ab52c2734977ee85d847d733dcfc48920bf0": "2d2adffeaa598daf11446678466f97d3",
".git/objects/b6/847af84668f859e670bc343cb1767c5f9fb9a1": "2b1c613b00e1262af4bd1c864593130b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/56184a820df5a248cc4afa54280059fdcbfaf6": "856d30b5f78d049f414f42e4b641b193",
".git/objects/bc/b6b22bece5c8cf7d4d728b23738853597da90e": "b1aa834b2ceab38906d60889f6c20a0e",
".git/objects/bd/ac2dea79b514f98bd01073b1dbf3d3787fdafb": "abf156607753c185d03281bc16d2b09b",
".git/objects/c6/92ca2b3b3c3149b7393ecd956dfab2507a0343": "b4b9b51e4f9ce2f15ab5a84e2055fc13",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/10079bda6a900d6ea626ba3b7659593ba3edab": "ce59e9e91a88a01fca9defbc9b212abd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a08b5eb0082a9788852bd2ce1f6ff60f53c949": "96b9cdd157c8577ebc70f320f46b92fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f9/5f629b53100826306b5c362c103febb0701881": "cc99d65180688fcd8156a70b302776d8",
".git/objects/ff/ff272fd69bbc28c4112d0c32f45909044f114c": "eb712af859b3b5dea36301a9a195cd9f",
".git/ORIG_HEAD": "a194c3f2291b116b10f3891842d1530d",
".git/refs/heads/master": "cc19c6348984659b9f02fd52ce222862",
".git/refs/remotes/origin/master": "cc19c6348984659b9f02fd52ce222862",
"assets/AssetManifest.bin": "db31dad60cab5678953dc6f36bc80f58",
"assets/AssetManifest.json": "7536372c2f30aa763b7d404ead773fb8",
"assets/assets/images/figma_Pinky_hand_icon.png": "1bf630facf9f637a62ca92d13ff3fc2c",
"assets/assets/images/github_profile_papercastl3.png": "e0b979a11233ae081fbd6c054491a8d3",
"assets/assets/images/github_profile_woojin01.png": "3325dbdccc709758f80b95c2cf0b1633",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "fae3ceb28151efba064b0ad07a36a9b2",
"assets/NOTICES": "768bd8764a447b274e97015d62796089",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/canvaskit.wasm": "c11489d0518b0dec53ef98bbdbba5510",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "95c7515bf3c64c5ecb29b458300d1eab",
"/": "95c7515bf3c64c5ecb29b458300d1eab",
"main.dart.js": "469baec19589ffa3da77c4c3d24851d7",
"manifest.json": "bea8f16bff02a31e1d488240afa27a15",
"README.md": "efbab234cbcb28ffcf32f6b8bb6e9ebd",
"version.json": "ea3253357845d1e7b790f4f4c4bb672c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
