if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + ".js", c).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let r = {};
    const t = (e) => a(e, i),
      o = { module: { uri: i }, exports: r, require: t };
    s[i] = Promise.all(c.map((e) => o[e] || t(e))).then((e) => (n(...e), r));
  };
}
define(["./workbox-c06b064f"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/192.png", revision: "7599eb38b23c3f5062310ea15ad1b816" },
        { url: "/384.png", revision: "b270e8aa7ddfe8d85040ceeda06bf7c1" },
        { url: "/512.png", revision: "647ad3d310341c96303466e0703df478" },
        {
          url: "/_next/static/SyTxM63WO75Jp6HrMUzIc/_buildManifest.js",
          revision: "e0a21c7d7f93d89dce16df0231dc76f2",
        },
        {
          url: "/_next/static/SyTxM63WO75Jp6HrMUzIc/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/250-6b41840bd8af6d56.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/468-f50e9f8256ddd19b.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/62-05595c07885d2f7f.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/739-00b0c4a8df54252a.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/749-781e98739458dae9.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/dongbak/page-f4a86af3a9d7c12e.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/dongwha/loading-0ada677a754f6537.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/dongwha/page-7eb6dc7a9185a8f8.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/entire-map/page-01168dd3cb34f8ab.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/error-2d46b657488b02b6.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/layout-93a9d11d505c8de0.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/not-found-58fd16be6666cfc5.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/page-595f3ca0eb050a64.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/play/loading-f4e01c5440e28f6f.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/play/page-aeacee513c26b773.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/stage/loading-8f4e6642b5ab40ab.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/app/stage/page-126c4f9d075cfa28.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/fd9d1056-6aa4fc1f8c1b8db2.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/framework-aec844d2ccbe7592.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/main-app-b11c9ba2b44b37ef.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/main-f236b896fe0c982a.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/pages/_app-75f6107b0260711c.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-51fcdaac09bdfb77.js",
          revision: "SyTxM63WO75Jp6HrMUzIc",
        },
        {
          url: "/_next/static/css/0bfe8f8bf8a530a4.css",
          revision: "0bfe8f8bf8a530a4",
        },
        {
          url: "/_next/static/css/38b81a200f19290c.css",
          revision: "38b81a200f19290c",
        },
        {
          url: "/_next/static/css/a0124018613d67e5.css",
          revision: "a0124018613d67e5",
        },
        {
          url: "/arrow-down.svg",
          revision: "fa118ff15d1e3e6723371e4b8f06c151",
        },
        { url: "/busking.png", revision: "346fc3e765f89512463839c3be0ef7da" },
        {
          url: "/buskingActiveIcon.svg",
          revision: "00a318e0033ad119ba36d41ba0be65f7",
        },
        {
          url: "/buskingIcon.svg",
          revision: "a1e7f77f315d44173446b807ed3678f6",
        },
        { url: "/call-icon.svg", revision: "62b5f9e6db2dec1cc84ca55cb5d6d0fa" },
        {
          url: "/clickedCarousel.svg",
          revision: "2e19ef30e7e017437cd75e2656b950c4",
        },
        {
          url: "/dongariActiveIcon.svg",
          revision: "b6da33e81dd6559a6793fc647da80bc3",
        },
        {
          url: "/dongariIcon.svg",
          revision: "0ac0a01558f224f6d52234f90412725a",
        },
        { url: "/dongbak1.jpeg", revision: "3113d7a1f294cb765467f936e9598c0e" },
        { url: "/dongbak2.jpeg", revision: "da0cf692852244d954ecbaa5cf13d6c0" },
        { url: "/dongbak3.jpeg", revision: "08514b09275fb390ee15a0427dffcfad" },
        { url: "/dongbak4.jpeg", revision: "bd015a793dd73c539245cbde54276e3c" },
        { url: "/dongbak5.jpeg", revision: "1d2bcba64326e13c0f18392a219a979c" },
        { url: "/dongbak6.jpeg", revision: "7fdd55ac1b3a816da1594b24371d5bc3" },
        { url: "/dongbak7.jpeg", revision: "6d412efc1c9e01ebf4857befe39dbf8e" },
        { url: "/dongbakHr.svg", revision: "b62959acd998ee9f0c57fc7163bb14be" },
        { url: "/donghwa1.png", revision: "7e115b645528a890b7d840b06b5fc62c" },
        { url: "/donghwa2.png", revision: "d7c8267fa71f43cc5cb1743df7c3e648" },
        { url: "/donghwa3.png", revision: "46a8223f99a7dfae112c9cbb0f087812" },
        { url: "/donghwa4.png", revision: "26bc540f36f54e89c3a019d0df52db1c" },
        { url: "/donghwa5.png", revision: "c8c5b7863ba5d513f121eb0b30f265eb" },
        { url: "/donghwa6.png", revision: "25db3649d46358b78701ed740ef95acc" },
        {
          url: "/dongyeonActiveIcon.svg",
          revision: "e40c316925095d7c3d07b2a44f13d38d",
        },
        {
          url: "/dongyeonIcon.svg",
          revision: "e531db4f98d4493579c62ad573760711",
        },
        {
          url: "/entire-map.svg",
          revision: "f870bc1cc95f3657ec53b167bec798e8",
        },
        {
          url: "/exhibition.png",
          revision: "ea7e9f69c2f95c72c2235474563f602f",
        },
        { url: "/exit.svg", revision: "d7618090724cc264f01ed0593dc87b87" },
        {
          url: "/gray-ellipse.svg",
          revision: "670bbf10637063ef04ecf247d7c5c087",
        },
        {
          url: "/handle-arrow-left.svg",
          revision: "afe656c0e9404c7afcbc1943ec8c9bf5",
        },
        { url: "/iconHr.svg", revision: "7c33893615527557a5319b028df08fb9" },
        {
          url: "/instagram-icon.svg",
          revision: "09e8ae27d21e7dd26dbb48571a0b72cf",
        },
        { url: "/link-icon.svg", revision: "2c6a6d47e4a5bee543c59847b054dee4" },
        {
          url: "/main-booth.png",
          revision: "662f22ac2aa772aa23220f70799c746a",
        },
        { url: "/manifest.json", revision: "0cf26794afc61340ebca78c602f49ccb" },
        { url: "/medal.svg", revision: "29ad13475510e5d187a3bb9fea05c85f" },
        { url: "/medal2.svg", revision: "bf0a853c93d6f677d49578b1755a8880" },
        { url: "/medal3.svg", revision: "2d540df7d5adb45fb86e87d791513f06" },
        {
          url: "/navigator-handle.svg",
          revision: "fb4a134d8c661e349e797e05c28a2ad4",
        },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        {
          url: "/picture-icon.svg",
          revision: "5fe773f9a2080236307dc1ced7450e87",
        },
        {
          url: "/playActiveIcon.svg",
          revision: "9b9da857ffb4afcf4326ecd1f9ccc1fe",
        },
        { url: "/playIcon.svg", revision: "0d07c3080f880462e94ffe115e8f0370" },
        {
          url: "/refreshIcon.svg",
          revision: "a0c8c17e7ef7b642a8addd8b2e73e8e6",
        },
        {
          url: "/section-list.svg",
          revision: "1ff1c642d5b6e47f16f264f9b9cfd127",
        },
        { url: "/sectionA.png", revision: "9d4a1b382db96a8e296fb9e91be96fb1" },
        { url: "/sectionB.png", revision: "cb4ac985302d459d770b3bdfa57399cf" },
        { url: "/sectionC.png", revision: "58fa8cbcc31e4323d8c014e08756f59e" },
        { url: "/sectionD.png", revision: "328bb0ca0633cac18900b3319adddcf8" },
        {
          url: "/swe-worker-4da67dda9bc18c53.js",
          revision: "5a47d90db13bb1309b25bdf7b363570e",
        },
        { url: "/thumbnail.png", revision: "db49ea707ea17aac8e39c877e0602724" },
        {
          url: "/unclickedCarousel.svg",
          revision: "67998679af7def2725861a7bf64ffecd",
        },
        { url: "/wholeMap.png", revision: "338852410ec74950a110050d0de7ae28" },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && "opaqueredirect" === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: "OK",
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: "next-static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith("/api/auth/callback") || !s.startsWith("/api/")),
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") &&
        "1" === e.headers.get("Next-Router-Prefetch") &&
        a &&
        !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc-prefetch",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        "1" === e.headers.get("RSC") && a && !s.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages-rsc",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith("/api/"),
      new e.NetworkFirst({
        cacheName: "pages",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0);
});
