if (!self.define) {
  let e,
    a = {};
  const s = (s, i) => (
    (s = new URL(s + ".js", i).href),
    a[s] ||
      new Promise((a) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else (e = s), importScripts(s), a();
      }).then(() => {
        let e = a[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const n =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (a[n]) return;
    let r = {};
    const d = (e) => s(e, n),
      t = { module: { uri: n }, exports: r, require: d };
    a[n] = Promise.all(i.map((e) => t[e] || d(e))).then((e) => (c(...e), r));
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
          url: "/_next/static/4C5zCSoeoHroENw2FcfRA/_buildManifest.js",
          revision: "22d128128c6cdb2484aeafa6ea66da0e",
        },
        {
          url: "/_next/static/4C5zCSoeoHroENw2FcfRA/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/156-8a86c634a858298a.js",
          revision: "8a86c634a858298a",
        },
        {
          url: "/_next/static/chunks/207-30f0109b9e5f318c.js",
          revision: "30f0109b9e5f318c",
        },
        {
          url: "/_next/static/chunks/255-b747b7397baeed0f.js",
          revision: "b747b7397baeed0f",
        },
        {
          url: "/_next/static/chunks/460-a5995440a9368e7a.js",
          revision: "a5995440a9368e7a",
        },
        {
          url: "/_next/static/chunks/607-49b0c274de8868b3.js",
          revision: "49b0c274de8868b3",
        },
        {
          url: "/_next/static/chunks/661-1d58b6576446a1b2.js",
          revision: "1d58b6576446a1b2",
        },
        {
          url: "/_next/static/chunks/799-b40362dacb42d2dd.js",
          revision: "b40362dacb42d2dd",
        },
        {
          url: "/_next/static/chunks/904-f3eedbf30108e67c.js",
          revision: "f3eedbf30108e67c",
        },
        {
          url: "/_next/static/chunks/975-756a48b6cd5021d2.js",
          revision: "756a48b6cd5021d2",
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
          url: "/_next/static/chunks/pages/_app-bb64cab76cc282b0.js",
          revision: "bb64cab76cc282b0",
        },
        {
          url: "/_next/static/chunks/pages/_error-77823ddac6993d35.js",
          revision: "77823ddac6993d35",
        },
        {
          url: "/_next/static/chunks/pages/addbin-643c1fa8553013c0.js",
          revision: "643c1fa8553013c0",
        },
        {
          url: "/_next/static/chunks/pages/index-9214b40c45f4466d.js",
          revision: "9214b40c45f4466d",
        },
        {
          url: "/_next/static/chunks/pages/location-b18978905b233f36.js",
          revision: "b18978905b233f36",
        },
        {
          url: "/_next/static/chunks/pages/mypage-a09d9e0d01fc4929.js",
          revision: "a09d9e0d01fc4929",
        },
        {
          url: "/_next/static/chunks/pages/mypage/ask-02ca89793264722c.js",
          revision: "02ca89793264722c",
        },
        {
          url: "/_next/static/chunks/pages/mypage/ask/%5Bid%5D-6922af2eb253586c.js",
          revision: "6922af2eb253586c",
        },
        {
          url: "/_next/static/chunks/pages/mypage/ask/indexSSR-6062f069e3d9cba9.js",
          revision: "6062f069e3d9cba9",
        },
        {
          url: "/_next/static/chunks/pages/mypage/detail/%5Bid%5D-592b5071842dd605.js",
          revision: "592b5071842dd605",
        },
        {
          url: "/_next/static/chunks/pages/mypage/edit/%5Bid%5D-75f8895ef6d6bbae.js",
          revision: "75f8895ef6d6bbae",
        },
        {
          url: "/_next/static/chunks/pages/mypage/fix-f1bb2bc673bdb55d.js",
          revision: "f1bb2bc673bdb55d",
        },
        {
          url: "/_next/static/chunks/pages/mypage/fix/%5Bid%5D-879b47cfebafc256.js",
          revision: "879b47cfebafc256",
        },
        {
          url: "/_next/static/chunks/pages/mypage/fix/indexSSR-b927d912f8236e20.js",
          revision: "b927d912f8236e20",
        },
        {
          url: "/_next/static/chunks/pages/mypage/indexSSR-edf81885757227ed.js",
          revision: "edf81885757227ed",
        },
        {
          url: "/_next/static/chunks/pages/mypage/report-ccc96e8263567598.js",
          revision: "ccc96e8263567598",
        },
        {
          url: "/_next/static/chunks/pages/mypage/report/%5Bid%5D-360b19156f64af71.js",
          revision: "360b19156f64af71",
        },
        {
          url: "/_next/static/chunks/pages/mypage/report/indexSSR-1a42900110ff6884.js",
          revision: "1a42900110ff6884",
        },
        {
          url: "/_next/static/chunks/pages/search-43a3555ac324aa0c.js",
          revision: "43a3555ac324aa0c",
        },
        {
          url: "/_next/static/chunks/pages/search/%5Bid%5D-0bf4393d3ef08d3a.js",
          revision: "0bf4393d3ef08d3a",
        },
        {
          url: "/_next/static/chunks/pages/signin-ae386d1bd099d721.js",
          revision: "ae386d1bd099d721",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-ee7e63bc15b31913.js",
          revision: "ee7e63bc15b31913",
        },
        {
          url: "/_next/static/css/13ccd50620b19a1a.css",
          revision: "13ccd50620b19a1a",
        },
        {
          url: "/_next/static/css/1b0611f181e52aae.css",
          revision: "1b0611f181e52aae",
        },
        {
          url: "/_next/static/css/35a66b9a661e36c4.css",
          revision: "35a66b9a661e36c4",
        },
        {
          url: "/_next/static/css/3e1225be7386241b.css",
          revision: "3e1225be7386241b",
        },
        {
          url: "/_next/static/css/49cb98f7edbb7554.css",
          revision: "49cb98f7edbb7554",
        },
        {
          url: "/_next/static/css/4e4b5567f107d99f.css",
          revision: "4e4b5567f107d99f",
        },
        {
          url: "/_next/static/css/6555d20e5662d516.css",
          revision: "6555d20e5662d516",
        },
        {
          url: "/_next/static/css/6a418b770510e80f.css",
          revision: "6a418b770510e80f",
        },
        {
          url: "/_next/static/css/7378704fe1605fc4.css",
          revision: "7378704fe1605fc4",
        },
        {
          url: "/_next/static/css/905de3c85e4e1622.css",
          revision: "905de3c85e4e1622",
        },
        {
          url: "/_next/static/css/b4381d1f8c6f6d12.css",
          revision: "b4381d1f8c6f6d12",
        },
        {
          url: "/_next/static/css/d13ec1b90e6d4dfe.css",
          revision: "d13ec1b90e6d4dfe",
        },
        {
          url: "/_next/static/media/accountDelete.99d2dbfc.svg",
          revision: "8cbdf211a2fe90af38eb1f313219c261",
        },
        {
          url: "/_next/static/media/adminMark.b8327bc4.svg",
          revision: "de4ab4959966a041460069f5d37eb48e",
        },
        {
          url: "/_next/static/media/arrowGray.aea1b5ab.svg",
          revision: "ad0af149f05d0b4af2ae00824e27767c",
        },
        {
          url: "/_next/static/media/arrowGreen.5c4de6bd.svg",
          revision: "cada397d8538c7a3d1186ae881da7ae6",
        },
        {
          url: "/_next/static/media/arrowRight.0dfafcf5.svg",
          revision: "3be9152dbc9caed806cd2929b25ad317",
        },
        {
          url: "/_next/static/media/bobble.7fc1e123.svg",
          revision: "e8295305171ffc197856df97d825b547",
        },
        {
          url: "/_next/static/media/bookmark.2e0fc873.svg",
          revision: "f0598574c572eb584990d0b5f3557d1e",
        },
        {
          url: "/_next/static/media/bookmarkOn.a007bdae.svg",
          revision: "1cf477193175d509542d90679532be25",
        },
        {
          url: "/_next/static/media/close.d1b25a40.svg",
          revision: "e92d82d45f83a96fcdcfaaad926571f2",
        },
        {
          url: "/_next/static/media/declaration.bd88074d.svg",
          revision: "e88ff38619f32a4ab2e547bbb02e9c2f",
        },
        {
          url: "/_next/static/media/dropClose-dark.34910aa8.svg",
          revision: "05d2534017811484a37992ff6870b68c",
        },
        {
          url: "/_next/static/media/dropClose.d746399d.svg",
          revision: "0297a49bc9e43e021b9ccf6388a931a1",
        },
        {
          url: "/_next/static/media/home.fe9ce71c.svg",
          revision: "12e9f839d1a339d44a1eb60c79af8e7d",
        },
        {
          url: "/_next/static/media/homeOn.30cf1855.svg",
          revision: "d31ce848279492a1433dc1a923595951",
        },
        {
          url: "/_next/static/media/icon-gray-star.b86addcf.svg",
          revision: "05a8817e83e3ec53543c229fdd09c723",
        },
        {
          url: "/_next/static/media/inputX.4a382efd.svg",
          revision: "3e474bb6a5e127d8b42ca53c6d8df0e6",
        },
        {
          url: "/_next/static/media/kakao.11a68464.svg",
          revision: "4e64dfa322fdb9da69e191c5955ca67f",
        },
        {
          url: "/_next/static/media/location.bffccbcb.svg",
          revision: "dada2ca0034c7af7190faf4dc5b223c5",
        },
        {
          url: "/_next/static/media/logo.2033da13.svg",
          revision: "e0357ac97c2383273d5d28035b1ea45f",
        },
        {
          url: "/_next/static/media/logout.6b50e8a9.svg",
          revision: "5c14e11b9a581a4ad86b263ffb713d85",
        },
        {
          url: "/_next/static/media/modalWrong.6774d361.svg",
          revision: "80515466260665834c6fb0a58652a851",
        },
        {
          url: "/_next/static/media/mypage.c50f2c25.svg",
          revision: "5949cdfd6185f6113700e59863145544",
        },
        {
          url: "/_next/static/media/mypageMore.a6a3f140.svg",
          revision: "e3351bcc27cc5f999a9da220369f0724",
        },
        {
          url: "/_next/static/media/mypageNologin.e8c51df6.svg",
          revision: "6a91f378b4bd76d9072252bc5ba9ffc1",
        },
        {
          url: "/_next/static/media/mypageOn.e0fc28bb.svg",
          revision: "04c5207b32c1fe522ad3c6f73ea9d125",
        },
        {
          url: "/_next/static/media/noti.d2fbae86.svg",
          revision: "b2b7dd5e638f26e22a5a1e408a21cbd7",
        },
        {
          url: "/_next/static/media/notiNone.13733f68.svg",
          revision: "9ea13c76cd2fc638321e7efc549dbfea",
        },
        {
          url: "/_next/static/media/notiOn.950b13a6.svg",
          revision: "197ba4f6b6ce4cd45fdb5de442cbe2ee",
        },
        {
          url: "/_next/static/media/onBoarding1.2649c1b6.svg",
          revision: "2aa05604e610f41f75e7b351302efda5",
        },
        {
          url: "/_next/static/media/onBoarding2.1dc50bdf.svg",
          revision: "4426307b9c44adb7f3fd92a59282dbf6",
        },
        {
          url: "/_next/static/media/onBoarding3.6fd267c4.svg",
          revision: "730fc6d564ef9047a54b4ea80f438f71",
        },
        {
          url: "/_next/static/media/pen.f64ccde0.svg",
          revision: "76e4a423b3d90e32f772582fc0b9c8d7",
        },
        {
          url: "/_next/static/media/profileDefault.241cecb9.svg",
          revision: "c67babd3d5e325e0496d3afbb9341099",
        },
        {
          url: "/_next/static/media/profileEdit.cbddda4c.svg",
          revision: "e4628c04a4aefe63bcf80eed5b26337b",
        },
        {
          url: "/_next/static/media/report-gray.952bd874.svg",
          revision: "60572941f242d0e06c260f37e599e91b",
        },
        {
          url: "/_next/static/media/search.940b0661.svg",
          revision: "f8a8fd2a59e7e363aad63b9f444a572d",
        },
        {
          url: "/_next/static/media/searchOn.70af1a48.svg",
          revision: "61c09fdbcbdebdd0a90f0edfcafbf4a9",
        },
        {
          url: "/_next/static/media/share.97edfb2a.svg",
          revision: "0db7c3a58b44f0d9e6ec08a505ec0b94",
        },
        {
          url: "/_next/static/media/star.d50acb15.svg",
          revision: "3275137ec118a4e63009617de8bf242f",
        },
        {
          url: "/_next/static/media/sun.094139f6.svg",
          revision: "721af7b867b478adda666dfe30a9bf69",
        },
        {
          url: "/_next/static/media/trashCall.eb6de0ef.svg",
          revision: "79abec215ddf39cbdc7fb751e483238e",
        },
        {
          url: "/_next/static/media/tutorial1.ad809a72.svg",
          revision: "dc676af4b41c0c87b5dafed3444264d6",
        },
        {
          url: "/_next/static/media/tutorialPin.1f886564.svg",
          revision: "63ee906970fcade7881024439ebe4f78",
        },
        {
          url: "/fonts/Pretendard-Variable.woff2",
          revision: "302ec55f5b4320354ec6b35a53dead87",
        },
        {
          url: "/images/accountDelete.svg",
          revision: "8cbdf211a2fe90af38eb1f313219c261",
        },
        {
          url: "/images/adminMark.svg",
          revision: "de4ab4959966a041460069f5d37eb48e",
        },
        {
          url: "/images/alert.svg",
          revision: "ba94e68c47d588779f8fbaee5fc1f43e",
        },
        {
          url: "/images/arrowGray.svg",
          revision: "ad0af149f05d0b4af2ae00824e27767c",
        },
        {
          url: "/images/arrowGreen.svg",
          revision: "cada397d8538c7a3d1186ae881da7ae6",
        },
        {
          url: "/images/arrowRight.svg",
          revision: "3be9152dbc9caed806cd2929b25ad317",
        },
        {
          url: "/images/bobble.svg",
          revision: "e8295305171ffc197856df97d825b547",
        },
        {
          url: "/images/bookmark.svg",
          revision: "f0598574c572eb584990d0b5f3557d1e",
        },
        {
          url: "/images/bookmarkOn.svg",
          revision: "1cf477193175d509542d90679532be25",
        },
        {
          url: "/images/checked-box.svg",
          revision: "19379dd3d1f561ac3a06c77036360e1a",
        },
        {
          url: "/images/close.svg",
          revision: "e92d82d45f83a96fcdcfaaad926571f2",
        },
        {
          url: "/images/declaration.svg",
          revision: "e88ff38619f32a4ab2e547bbb02e9c2f",
        },
        {
          url: "/images/default-icon.png",
          revision: "c7eee659cbcdc53fc3da51aa16c9801a",
        },
        {
          url: "/images/drink-bin.svg",
          revision: "3cd54161a7321120f941864bd779e611",
        },
        {
          url: "/images/dropClose-dark.svg",
          revision: "05d2534017811484a37992ff6870b68c",
        },
        {
          url: "/images/dropClose.svg",
          revision: "0297a49bc9e43e021b9ccf6388a931a1",
        },
        {
          url: "/images/favorite-bin.svg",
          revision: "ddfc6d0113352edccefeb9c5f7885daa",
        },
        {
          url: "/images/general-bin.svg",
          revision: "d19b00870462266e36958032e807fe8f",
        },
        {
          url: "/images/home.svg",
          revision: "12e9f839d1a339d44a1eb60c79af8e7d",
        },
        {
          url: "/images/homeOn.svg",
          revision: "d31ce848279492a1433dc1a923595951",
        },
        {
          url: "/images/icon-add-img.svg",
          revision: "9c90049deacf03329738c6e94d168121",
        },
        {
          url: "/images/icon-back-circle-btn.svg",
          revision: "6c11e0e644bd0f1d98c71542104b31e7",
        },
        {
          url: "/images/icon-edit-pen-btn-dark.svg",
          revision: "0ddf0724658b04450e839238a9e08e3d",
        },
        {
          url: "/images/icon-edit-pen-btn.svg",
          revision: "ff465fa94c66b0fac43e6328fbc064d6",
        },
        {
          url: "/images/icon-google-logo.svg",
          revision: "552f123326659f9ae02889ff1f109b1b",
        },
        {
          url: "/images/icon-gray-star.svg",
          revision: "05a8817e83e3ec53543c229fdd09c723",
        },
        {
          url: "/images/icon-kakao-logo.svg",
          revision: "eee3881ba927d86e517b34285785b250",
        },
        {
          url: "/images/icon-left-arrow.svg",
          revision: "30166ed5bb498a62e04460ef5aa0ac1e",
        },
        {
          url: "/images/icon-location-green-pin.svg",
          revision: "a626aa178b189ad11a183abe7ddc1cf9",
        },
        {
          url: "/images/icon-marker-add-bin.svg",
          revision: "d0c5ab46c8b2b697febf2e50da12400a",
        },
        {
          url: "/images/icon-marker-drink-bin.svg",
          revision: "6d08d15886569c6f5777bd77a36ef564",
        },
        {
          url: "/images/icon-marker-favorite.svg",
          revision: "005f3b9550a582b1bf6a9726995822df",
        },
        {
          url: "/images/icon-marker-general-bin.svg",
          revision: "df3746905d64ddba0efbba42d7574e4b",
        },
        {
          url: "/images/icon-marker-my-location.svg",
          revision: "edf87893e8e39244e819fe5b33965490",
        },
        {
          url: "/images/icon-marker-recommend.svg",
          revision: "f80a5dcb2e255ed05b9dfec887f93ea5",
        },
        {
          url: "/images/icon-marker-recyle-bin.svg",
          revision: "00562fbedb963d780dcb5433ec030663",
        },
        {
          url: "/images/icon-marker-tabacoo.svg",
          revision: "f0f9d71b07e25558d2b6c2846dedbca9",
        },
        {
          url: "/images/icon-my-locationBtn-dark.svg",
          revision: "27d671d5faf3d41f561c0f9bbd3850d2",
        },
        {
          url: "/images/icon-my-locationBtn.svg",
          revision: "e1768446c4376e077cf20731aacfedbd",
        },
        {
          url: "/images/icon-naver-logo.svg",
          revision: "5e68d3ff237ffc36f413cd9d5c21f9c2",
        },
        {
          url: "/images/icon-none-img.svg",
          revision: "1bcca429b142f24cdd8cfbd1264310e6",
        },
        {
          url: "/images/icon-plus.svg",
          revision: "6ba943a0335bac9dccdb0d7046239a88",
        },
        {
          url: "/images/icon-red-pin.svg",
          revision: "6921a0f8d354bd506688cbd2a95bb379",
        },
        {
          url: "/images/icon-report-btn-dark.svg",
          revision: "51dac1bb48c608bec9a6ca057e866c32",
        },
        {
          url: "/images/icon-report-btn.svg",
          revision: "bf8f4edf923171bda9f5ebc63a0ebeac",
        },
        {
          url: "/images/icon-sample-logo.svg",
          revision: "2ab9c71076fcefe667dc17508fe2b89f",
        },
        {
          url: "/images/inputDelete.svg",
          revision: "3e474bb6a5e127d8b42ca53c6d8df0e6",
        },
        {
          url: "/images/inputX.svg",
          revision: "3e474bb6a5e127d8b42ca53c6d8df0e6",
        },
        {
          url: "/images/kakao.svg",
          revision: "4e64dfa322fdb9da69e191c5955ca67f",
        },
        {
          url: "/images/location.svg",
          revision: "dada2ca0034c7af7190faf4dc5b223c5",
        },
        {
          url: "/images/logo-144.jpg",
          revision: "3725eab491f40b11f1b1bd4a7794572a",
        },
        {
          url: "/images/logo-144.png",
          revision: "2432b5028a49125c68003a26e3eb6276",
        },
        {
          url: "/images/logo.svg",
          revision: "e0357ac97c2383273d5d28035b1ea45f",
        },
        {
          url: "/images/logout.svg",
          revision: "5c14e11b9a581a4ad86b263ffb713d85",
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
          url: "/images/mypageMore.svg",
          revision: "e3351bcc27cc5f999a9da220369f0724",
        },
        {
          url: "/images/mypageNologin.svg",
          revision: "6a91f378b4bd76d9072252bc5ba9ffc1",
        },
        {
          url: "/images/mypageOn.svg",
          revision: "04c5207b32c1fe522ad3c6f73ea9d125",
        },
        {
          url: "/images/noti.svg",
          revision: "b2b7dd5e638f26e22a5a1e408a21cbd7",
        },
        {
          url: "/images/notiNone.svg",
          revision: "9ea13c76cd2fc638321e7efc549dbfea",
        },
        {
          url: "/images/notiOn.svg",
          revision: "197ba4f6b6ce4cd45fdb5de442cbe2ee",
        },
        {
          url: "/images/onBoarding1.svg",
          revision: "2aa05604e610f41f75e7b351302efda5",
        },
        {
          url: "/images/onBoarding2.svg",
          revision: "4426307b9c44adb7f3fd92a59282dbf6",
        },
        {
          url: "/images/onBoarding3.svg",
          revision: "730fc6d564ef9047a54b4ea80f438f71",
        },
        {
          url: "/images/pen.svg",
          revision: "76e4a423b3d90e32f772582fc0b9c8d7",
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
          url: "/images/recyle-bin.svg",
          revision: "8f8f0d76c299467c98aca86c3892ecb7",
        },
        {
          url: "/images/report-gray.svg",
          revision: "60572941f242d0e06c260f37e599e91b",
        },
        {
          url: "/images/return.svg",
          revision: "08a7131778e85355bbad2b1770b9e21c",
        },
        {
          url: "/images/search.svg",
          revision: "f8a8fd2a59e7e363aad63b9f444a572d",
        },
        {
          url: "/images/searchOn.svg",
          revision: "61c09fdbcbdebdd0a90f0edfcafbf4a9",
        },
        {
          url: "/images/share.svg",
          revision: "0db7c3a58b44f0d9e6ec08a505ec0b94",
        },
        {
          url: "/images/shareLogo.png",
          revision: "8b1a786fe1c296c19a6a8b90bf08fe2f",
        },
        {
          url: "/images/star.svg",
          revision: "3275137ec118a4e63009617de8bf242f",
        },
        {
          url: "/images/sun.svg",
          revision: "721af7b867b478adda666dfe30a9bf69",
        },
        {
          url: "/images/tabacoo-bin.svg",
          revision: "4660deab1e85f83df1f7f86fc36e39ee",
        },
        {
          url: "/images/thumb-down.svg",
          revision: "7404ed66ad89a34497925bef86011a67",
        },
        {
          url: "/images/thumb-up.svg",
          revision: "d28a875ea01bfea64782db5123d95543",
        },
        {
          url: "/images/trashCall.svg",
          revision: "79abec215ddf39cbdc7fb751e483238e",
        },
        {
          url: "/images/tutorial1.svg",
          revision: "dc676af4b41c0c87b5dafed3444264d6",
        },
        {
          url: "/images/tutorialItem.svg",
          revision: "8ff5e5e397b1b7cec2d206de0faeb87f",
        },
        {
          url: "/images/tutorialPin.svg",
          revision: "63ee906970fcade7881024439ebe4f78",
        },
        { url: "/manifest.json", revision: "d10faa022f458913d1bc688d98a853e3" },
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
              response: a,
              event: s,
              state: i,
            }) =>
              a && "opaqueredirect" === a.type
                ? new Response(a.body, {
                    status: 200,
                    statusText: "OK",
                    headers: a.headers,
                  })
                : a,
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
        const a = e.pathname;
        return !a.startsWith("/api/auth/") && !!a.startsWith("/api/");
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
  e.registerRoute(
    /\.(?:css|scss|less)$/i, // scss 추가
    new e.NetworkFirst({
      cacheName: "static-style-assets",
      plugins: [
        new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
      ],
    }),
    "GET"
  );
});
