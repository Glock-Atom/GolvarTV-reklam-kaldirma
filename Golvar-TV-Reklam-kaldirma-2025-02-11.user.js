// ==UserScript==
// @name         Golvar-TV-Reklam-kaldirma
// @namespace    http://tampermonkey.net/
// @version      2025-02-11
// @description  Golvar TV altta cikan reklami kaldirma scripti
// @author       Glock A.
// @include      https://golvar*.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=golvar3194.sbs
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('img[src="https://golvar3194.sbs/wp-content/uploads/2023/09/6kv47c6.gif"]').forEach(img => img.remove());
    document.querySelectorAll(".stream-ads").forEach(el => {
        el.style.visibility = "hidden";
    });

    

    let observer = new MutationObserver(() => {
        document.querySelectorAll('img[src="https://golvar3194.sbs/wp-content/uploads/2023/09/6kv47c6.gif"]').forEach(img => img.remove());
        document.querySelectorAll(".stream-ads").forEach(el => {
            el.style.visibility = "hidden";
        });
    });

    console.log("Golvar TV Reklam kaldirma: Reklam kaldirildi!");
    observer.observe(document.body, { childList: true, subtree: true });

    function checkUpdate(){
        if(window.top !== window.self && !(window.location.href.includes("golvar[0-9].[a-z]")));
            return;
    }

    const scriptURL = "https://github.com/Glock-Atom/GolvarTV-reklam-kaldirma/blob/main/Golvar-TV-Reklam-kaldirma-2025-02-11.user.js";

    fetch(scriptURL)
        .then(response => )

})();
