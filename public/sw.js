
if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
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
  self.define = (i, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[n]) return;
    let t = {};
    const r = (e) => a(e, n),
      o = { module: { uri: n }, exports: t, require: r };
    s[n] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-4754cb34"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/UvASke69_zQiXjYp5VW1C/_buildManifest.js",
          revision: "c1c4f80aa2deeaa7f05e2607eac466d0",
        },
        {
          url: "/_next/static/UvASke69_zQiXjYp5VW1C/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/756-caa9b060a3950777.js",
          revision: "caa9b060a3950777",
        },
        {
          url: "/_next/static/chunks/framework-ecc4130bc7a58a64.js",
          revision: "ecc4130bc7a58a64",
        },
        {
          url: "/_next/static/chunks/main-06e367d649e1e78f.js",
          revision: "06e367d649e1e78f",
        },
        {
          url: "/_next/static/chunks/pages/_app-02af5d1551ad99f0.js",
          revision: "02af5d1551ad99f0",
        },
        {
          url: "/_next/static/chunks/pages/_error-77823ddac6993d35.js",
          revision: "77823ddac6993d35",
        },
        {
          url: "/_next/static/chunks/pages/index-932fa3212a86fbe9.js",
          revision: "932fa3212a86fbe9",
        },
        {
          url: "/_next/static/chunks/pages/location-a9f9c4afe71729a4.js",
          revision: "a9f9c4afe71729a4",
        },
        {
          url: "/_next/static/chunks/pages/signin-b8b367c1738144d6.js",
          revision: "b8b367c1738144d6",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",
          revision: "8fa1640cc84ba8fe",
        },
        {
          url: "/_next/static/css/0e5181fb0b60afdb.css",
          revision: "0e5181fb0b60afdb",
        },
        {
          url: "/_next/static/css/44d82fb8463a4e1a.css",
          revision: "44d82fb8463a4e1a",
        },
        {
          url: "/_next/static/media/home.fe9ce71c.svg",
          revision: "12e9f839d1a339d44a1eb60c79af8e7d",
        },
        {
          url: "/_next/static/media/homeOn.108f7f23.svg",
          revision: "dc5aa0ec949e901100e6ccab2412be78",
        },
        {
          url: "/_next/static/media/mypage.c50f2c25.svg",
          revision: "5949cdfd6185f6113700e59863145544",
        },
        {
          url: "/_next/static/media/mypageOn.f85b2d07.svg",
          revision: "33b462e44ddd29cf9c71eccdb579c63b",
        },
        {
          url: "/_next/static/media/search.940b0661.svg",
          revision: "f8a8fd2a59e7e363aad63b9f444a572d",
        },
        {
          url: "/_next/static/media/searchOn.fb8c40ed.svg",
          revision: "2bcfec15ca2476a4e826f256c28ea609",
        },
        {
          url: "/fonts/PretendardVariable.woff2",
          revision: "302ec55f5b4320354ec6b35a53dead87",
        },
        {
          url: "/images/default-icon.png",
          revision: "c7eee659cbcdc53fc3da51aa16c9801a",
        },
        {
          url: "/images/dropClose.svg",
          revision: "0297a49bc9e43e021b9ccf6388a931a1",
        },
        {
          url: "/images/dsfsd.png",
          revision: "e6d077e1501705ac44d13fc8993dc8ec",
        },
        {
          url: "/images/home.svg",
          revision: "12e9f839d1a339d44a1eb60c79af8e7d",
        },
        {
          url: "/images/homeOn.svg",
          revision: "dc5aa0ec949e901100e6ccab2412be78",
        },
        {
          url: "/images/icon-google-logo.svg",
          revision: "552f123326659f9ae02889ff1f109b1b",
        },
        {
          url: "/images/icon-kakao-logo.svg",
          revision: "eee3881ba927d86e517b34285785b250",
        },
        {
          url: "/images/icon-naver-logo.svg",
          revision: "5e68d3ff237ffc36f413cd9d5c21f9c2",
        },
        {
          url: "/images/logo.jpg",
          revision: "6c2a1eb07b7218f959bedafde1d03d39",
        },
        {
          url: "/images/logo.png",
          revision: "93d33cc0cd8b87b98353539797d081ae",
        },
        {
          url: "/images/modalAccess.svg",
          revision: "c3bd0804d00c947af480d92c42831f7c",
        },
        {
          url: "/images/modalAudit.svg",
          revision: "c17fbc3058b654c7f23e91680e3200f2",
        },
        {
          url: "/images/modalWrong.svg",
          revision: "80515466260665834c6fb0a58652a851",
        },
        {
          url: "/images/mypage.svg",
          revision: "5949cdfd6185f6113700e59863145544",
        },
        {
          url: "/images/mypageOn.svg",
          revision: "33b462e44ddd29cf9c71eccdb579c63b",
        },
        {
          url: "/images/profileDefault.svg",
          revision: "c67babd3d5e325e0496d3afbb9341099",
        },
        {
          url: "/images/profileEdit.svg",
          revision: "e4628c04a4aefe63bcf80eed5b26337b",
        },
        {
          url: "/images/search.svg",
          revision: "f8a8fd2a59e7e363aad63b9f444a572d",
        },
        {
          url: "/images/searchOn.svg",
          revision: "2bcfec15ca2476a4e826f256c28ea609",
        },
        { url: "/manifest.json", revision: "162e16a9afec4dfc23512ed30e01cf01" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
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
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});

