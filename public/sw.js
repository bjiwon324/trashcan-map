if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const t=e=>s(e,n),d={module:{uri:n},exports:r,require:t};a[n]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/STMZPGH-FF8r-Gpk2tjx8/_buildManifest.js",revision:"52cdbee3352eed1efaee559f0727d409"},{url:"/_next/static/STMZPGH-FF8r-Gpk2tjx8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/255-569c44286e5a914f.js",revision:"569c44286e5a914f"},{url:"/_next/static/chunks/311-af33be4fb2804e9a.js",revision:"af33be4fb2804e9a"},{url:"/_next/static/chunks/423-995b9f1922d909e6.js",revision:"995b9f1922d909e6"},{url:"/_next/static/chunks/460-c8f830e62ee8ded2.js",revision:"c8f830e62ee8ded2"},{url:"/_next/static/chunks/536-89d8c62412e94cbf.js",revision:"89d8c62412e94cbf"},{url:"/_next/static/chunks/777-751e3808f9d4f7f6.js",revision:"751e3808f9d4f7f6"},{url:"/_next/static/chunks/829-afb6056924a6f4e9.js",revision:"afb6056924a6f4e9"},{url:"/_next/static/chunks/965-675c4f960fab63c1.js",revision:"675c4f960fab63c1"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-06e367d649e1e78f.js",revision:"06e367d649e1e78f"},{url:"/_next/static/chunks/pages/KakaoMap-198bdc9870b07b0f.js",revision:"198bdc9870b07b0f"},{url:"/_next/static/chunks/pages/KakaoMap/SearchBtn-e4350e62c22c80e4.js",revision:"e4350e62c22c80e4"},{url:"/_next/static/chunks/pages/_app-64ec708a8e4594e4.js",revision:"64ec708a8e4594e4"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/addbin-0795421bb5939925.js",revision:"0795421bb5939925"},{url:"/_next/static/chunks/pages/index-f502da16393b8fce.js",revision:"f502da16393b8fce"},{url:"/_next/static/chunks/pages/location-2addf366022add21.js",revision:"2addf366022add21"},{url:"/_next/static/chunks/pages/mypage-466fbb57b70404d4.js",revision:"466fbb57b70404d4"},{url:"/_next/static/chunks/pages/mypage/ask-f48d2606944cf8a6.js",revision:"f48d2606944cf8a6"},{url:"/_next/static/chunks/pages/mypage/ask/%5Bid%5D-6d09ae0bca2fc460.js",revision:"6d09ae0bca2fc460"},{url:"/_next/static/chunks/pages/mypage/ask/indexSSR-6062f069e3d9cba9.js",revision:"6062f069e3d9cba9"},{url:"/_next/static/chunks/pages/mypage/fix-1de65933862f42b5.js",revision:"1de65933862f42b5"},{url:"/_next/static/chunks/pages/mypage/fix/%5Bid%5D-3777a905ba52cf0b.js",revision:"3777a905ba52cf0b"},{url:"/_next/static/chunks/pages/mypage/fix/indexSSR-b927d912f8236e20.js",revision:"b927d912f8236e20"},{url:"/_next/static/chunks/pages/mypage/indexSSR-887b97ecdfa8de62.js",revision:"887b97ecdfa8de62"},{url:"/_next/static/chunks/pages/mypage/report-3e547ba936358745.js",revision:"3e547ba936358745"},{url:"/_next/static/chunks/pages/mypage/report/%5Bid%5D-3cf1e85b0f77f29c.js",revision:"3cf1e85b0f77f29c"},{url:"/_next/static/chunks/pages/mypage/report/indexSSR-1a42900110ff6884.js",revision:"1a42900110ff6884"},{url:"/_next/static/chunks/pages/search-509c5f9fa6f73b36.js",revision:"509c5f9fa6f73b36"},{url:"/_next/static/chunks/pages/signin-88a01ae02213aff4.js",revision:"88a01ae02213aff4"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/01fb44bc64791552.css",revision:"01fb44bc64791552"},{url:"/_next/static/css/36ea6ff2aa426735.css",revision:"36ea6ff2aa426735"},{url:"/_next/static/css/54b3d36d509f8a80.css",revision:"54b3d36d509f8a80"},{url:"/_next/static/css/5a0444b37512ef65.css",revision:"5a0444b37512ef65"},{url:"/_next/static/css/76ae6848f4cde200.css",revision:"76ae6848f4cde200"},{url:"/_next/static/css/78557940b47d4b85.css",revision:"78557940b47d4b85"},{url:"/_next/static/css/7dd7115db628c3be.css",revision:"7dd7115db628c3be"},{url:"/_next/static/css/9d1417e491ca51a4.css",revision:"9d1417e491ca51a4"},{url:"/_next/static/css/b0e324bc7f7a4395.css",revision:"b0e324bc7f7a4395"},{url:"/_next/static/css/c8bee67dfa568181.css",revision:"c8bee67dfa568181"},{url:"/_next/static/media/accountDelete.99d2dbfc.svg",revision:"8cbdf211a2fe90af38eb1f313219c261"},{url:"/_next/static/media/adminMark.b8327bc4.svg",revision:"de4ab4959966a041460069f5d37eb48e"},{url:"/_next/static/media/arrowGray.aea1b5ab.svg",revision:"ad0af149f05d0b4af2ae00824e27767c"},{url:"/_next/static/media/arrowGreen.5c4de6bd.svg",revision:"cada397d8538c7a3d1186ae881da7ae6"},{url:"/_next/static/media/arrowRight.0dfafcf5.svg",revision:"3be9152dbc9caed806cd2929b25ad317"},{url:"/_next/static/media/close.d1b25a40.svg",revision:"e92d82d45f83a96fcdcfaaad926571f2"},{url:"/_next/static/media/declaration.bd88074d.svg",revision:"e88ff38619f32a4ab2e547bbb02e9c2f"},{url:"/_next/static/media/dropClose.d746399d.svg",revision:"0297a49bc9e43e021b9ccf6388a931a1"},{url:"/_next/static/media/home.fe9ce71c.svg",revision:"12e9f839d1a339d44a1eb60c79af8e7d"},{url:"/_next/static/media/homeOn.30cf1855.svg",revision:"d31ce848279492a1433dc1a923595951"},{url:"/_next/static/media/icon-gray-star.b86addcf.svg",revision:"05a8817e83e3ec53543c229fdd09c723"},{url:"/_next/static/media/inputX.4a382efd.svg",revision:"3e474bb6a5e127d8b42ca53c6d8df0e6"},{url:"/_next/static/media/kakao.11a68464.svg",revision:"4e64dfa322fdb9da69e191c5955ca67f"},{url:"/_next/static/media/logout.6b50e8a9.svg",revision:"5c14e11b9a581a4ad86b263ffb713d85"},{url:"/_next/static/media/modalAccess.12112c5f.svg",revision:"c3bd0804d00c947af480d92c42831f7c"},{url:"/_next/static/media/modalAudit.828855ce.svg",revision:"c17fbc3058b654c7f23e91680e3200f2"},{url:"/_next/static/media/modalWrong.6774d361.svg",revision:"80515466260665834c6fb0a58652a851"},{url:"/_next/static/media/mypage.c50f2c25.svg",revision:"5949cdfd6185f6113700e59863145544"},{url:"/_next/static/media/mypageNologin.e8c51df6.svg",revision:"6a91f378b4bd76d9072252bc5ba9ffc1"},{url:"/_next/static/media/mypageOn.e0fc28bb.svg",revision:"04c5207b32c1fe522ad3c6f73ea9d125"},{url:"/_next/static/media/noti.d2fbae86.svg",revision:"b2b7dd5e638f26e22a5a1e408a21cbd7"},{url:"/_next/static/media/notiNone.13733f68.svg",revision:"9ea13c76cd2fc638321e7efc549dbfea"},{url:"/_next/static/media/pen.f64ccde0.svg",revision:"76e4a423b3d90e32f772582fc0b9c8d7"},{url:"/_next/static/media/profileDefault.241cecb9.svg",revision:"c67babd3d5e325e0496d3afbb9341099"},{url:"/_next/static/media/profileEdit.cbddda4c.svg",revision:"e4628c04a4aefe63bcf80eed5b26337b"},{url:"/_next/static/media/report-gray.952bd874.svg",revision:"60572941f242d0e06c260f37e599e91b"},{url:"/_next/static/media/search.940b0661.svg",revision:"f8a8fd2a59e7e363aad63b9f444a572d"},{url:"/_next/static/media/searchOn.70af1a48.svg",revision:"61c09fdbcbdebdd0a90f0edfcafbf4a9"},{url:"/_next/static/media/share.97edfb2a.svg",revision:"0db7c3a58b44f0d9e6ec08a505ec0b94"},{url:"/_next/static/media/star.d50acb15.svg",revision:"3275137ec118a4e63009617de8bf242f"},{url:"/_next/static/media/trashCall.eb6de0ef.svg",revision:"79abec215ddf39cbdc7fb751e483238e"},{url:"/fonts/Pretendard-Variable.woff2",revision:"302ec55f5b4320354ec6b35a53dead87"},{url:"/images/accountDelete.svg",revision:"8cbdf211a2fe90af38eb1f313219c261"},{url:"/images/adminMark.svg",revision:"de4ab4959966a041460069f5d37eb48e"},{url:"/images/arrowGray.svg",revision:"ad0af149f05d0b4af2ae00824e27767c"},{url:"/images/arrowGreen.svg",revision:"cada397d8538c7a3d1186ae881da7ae6"},{url:"/images/arrowRight.svg",revision:"3be9152dbc9caed806cd2929b25ad317"},{url:"/images/close.svg",revision:"e92d82d45f83a96fcdcfaaad926571f2"},{url:"/images/declaration.svg",revision:"e88ff38619f32a4ab2e547bbb02e9c2f"},{url:"/images/default-icon.png",revision:"c7eee659cbcdc53fc3da51aa16c9801a"},{url:"/images/dropClose.svg",revision:"0297a49bc9e43e021b9ccf6388a931a1"},{url:"/images/home.svg",revision:"12e9f839d1a339d44a1eb60c79af8e7d"},{url:"/images/homeOn.svg",revision:"d31ce848279492a1433dc1a923595951"},{url:"/images/icon-add-img.svg",revision:"9c90049deacf03329738c6e94d168121"},{url:"/images/icon-google-logo.svg",revision:"552f123326659f9ae02889ff1f109b1b"},{url:"/images/icon-gray-star.svg",revision:"05a8817e83e3ec53543c229fdd09c723"},{url:"/images/icon-kakao-logo.svg",revision:"eee3881ba927d86e517b34285785b250"},{url:"/images/icon-left-arrow.svg",revision:"30166ed5bb498a62e04460ef5aa0ac1e"},{url:"/images/icon-location-green-pin.svg",revision:"a626aa178b189ad11a183abe7ddc1cf9"},{url:"/images/icon-marker-drink-bin-click.svg",revision:"5b3ae67e0cac622ace9f0a032ca118f4"},{url:"/images/icon-marker-drink-bin.svg",revision:"6d08d15886569c6f5777bd77a36ef564"},{url:"/images/icon-marker-favorite-click.svg",revision:"9ca97ebdd8eb76571fc11beaa5d25def"},{url:"/images/icon-marker-favorite.svg",revision:"005f3b9550a582b1bf6a9726995822df"},{url:"/images/icon-marker-general-bin-click.svg",revision:"c7dd029b04b9f02682f20c043e1ba211"},{url:"/images/icon-marker-general-bin.svg",revision:"df3746905d64ddba0efbba42d7574e4b"},{url:"/images/icon-marker-my-location.svg",revision:"66a04b883a76db0a89c418435a8c8afd"},{url:"/images/icon-marker-recyle-bin-click.svg",revision:"ff0162629c9baa086487723d49482732"},{url:"/images/icon-marker-recyle-bin.svg",revision:"00562fbedb963d780dcb5433ec030663"},{url:"/images/icon-marker-tabacoo-click.svg",revision:"8e5fb0ee44786123cb813999ff88771c"},{url:"/images/icon-marker-tabacoo.svg",revision:"b4d9ba67c9a1216fd9a00105f26d1bbd"},{url:"/images/icon-my-lovcationBtn.svg",revision:"e1768446c4376e077cf20731aacfedbd"},{url:"/images/icon-naver-logo.svg",revision:"5e68d3ff237ffc36f413cd9d5c21f9c2"},{url:"/images/icon-plus.svg",revision:"6ba943a0335bac9dccdb0d7046239a88"},{url:"/images/icon-sample-logo.svg",revision:"2ab9c71076fcefe667dc17508fe2b89f"},{url:"/images/inputDelete.svg",revision:"3e474bb6a5e127d8b42ca53c6d8df0e6"},{url:"/images/inputX.svg",revision:"3e474bb6a5e127d8b42ca53c6d8df0e6"},{url:"/images/kakao.svg",revision:"4e64dfa322fdb9da69e191c5955ca67f"},{url:"/images/logo-144.png",revision:"3ccbae91688685f9dcc20224700a03bf"},{url:"/images/logout.svg",revision:"5c14e11b9a581a4ad86b263ffb713d85"},{url:"/images/modalAccess.svg",revision:"c3bd0804d00c947af480d92c42831f7c"},{url:"/images/modalAudit.svg",revision:"c17fbc3058b654c7f23e91680e3200f2"},{url:"/images/modalWrong.svg",revision:"80515466260665834c6fb0a58652a851"},{url:"/images/mypage.svg",revision:"5949cdfd6185f6113700e59863145544"},{url:"/images/mypageNologin.svg",revision:"6a91f378b4bd76d9072252bc5ba9ffc1"},{url:"/images/mypageOn.svg",revision:"04c5207b32c1fe522ad3c6f73ea9d125"},{url:"/images/noti.svg",revision:"b2b7dd5e638f26e22a5a1e408a21cbd7"},{url:"/images/notiNone.svg",revision:"9ea13c76cd2fc638321e7efc549dbfea"},{url:"/images/pen.svg",revision:"76e4a423b3d90e32f772582fc0b9c8d7"},{url:"/images/profileDefault.svg",revision:"c67babd3d5e325e0496d3afbb9341099"},{url:"/images/profileEdit.svg",revision:"e4628c04a4aefe63bcf80eed5b26337b"},{url:"/images/report-gray.svg",revision:"60572941f242d0e06c260f37e599e91b"},{url:"/images/search.svg",revision:"f8a8fd2a59e7e363aad63b9f444a572d"},{url:"/images/searchOn.svg",revision:"61c09fdbcbdebdd0a90f0edfcafbf4a9"},{url:"/images/share.svg",revision:"0db7c3a58b44f0d9e6ec08a505ec0b94"},{url:"/images/star.svg",revision:"3275137ec118a4e63009617de8bf242f"},{url:"/images/trashCall.svg",revision:"79abec215ddf39cbdc7fb751e483238e"},{url:"/manifest.json",revision:"d10faa022f458913d1bc688d98a853e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
