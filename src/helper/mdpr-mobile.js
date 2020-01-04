(function(){
    "use strict";
    /**
     * finds the article id from page
     */
    let findArticleId = function (){
        let l = document.querySelector("a[data-click=photo_back_article]");
        if (l && l.href) {
            let parts = l.href.split("/");
            if (parts.length) {
                if (parts[parts.length - 1].match(/^\d+$/)) {
                    return parts[parts.length - 1];
                }
            }
        }

        l = document.querySelector("input[name=topic_id]");
        if (l && l.value && l.value.match(/^\d+$/)) {
            return l.value;
        }

        return null;
    };

    /**
     * get all images from mobile apis
     */
    let fetchAllImageURL = function (articleId, callback){
        //https://app2-mdpr.freetls.fastly.net/api/images/dialog/article?article_id=1926239&index=0
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://app2-mdpr.freetls.fastly.net/api/images/dialog/article?index=0&article_id=" + articleId, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // WARNING! Might be evaluating an evil script!
                let resp = JSON.parse(xhr.responseText);
                if (callback && (callback instanceof Function)) {
                    callback(resp);
                }
            }
        };
        xhr.send();
    };

    let div = document.getElementById("_mid-images_");
    if (!div) {
        div = document.createElement('div');
        div.id = "_mid-images_";
        document.body.appendChild(div);
        div = document.getElementById("_mid-images_");
    }

    let articleId = findArticleId();
    if (articleId) {
        fetchAllImageURL(articleId, function (resp) {
            let s = "";
            if (resp && resp.list && resp.list.length) {
                for (const item of resp.list) {
                    s += encodeURIComponent(item.url) + ";";
                }
            }

            div.dataset["images"] = s;
        });
    }
})();
