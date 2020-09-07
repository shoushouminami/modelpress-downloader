(function(){
    "use strict";
    /**
     * search for the "post" props
     */
    let findPropFromReactDOM = function (dom, propName, depth = 0) {
        for (const key of Object.keys(dom)) {
            if (key.startsWith("__reactInternalInstance$")) {
                if (dom[key]
                    && dom[key].return
                    && dom[key].return.stateNode
                    && dom[key].return.stateNode.props
                    && dom[key].return.stateNode.props[propName]) {
                    return dom[key].return.stateNode.props[propName];
                }
            }
        }

        if (depth >= 3) {
            return null;
        }

        for (const elem of dom.children) {
            let prop = findPropFromReactDOM(elem, propName, depth + 1);
            if (prop) {
                return prop;
            }
        }
    };

    let div = require("./helper-utils").getOrCreateDataDiv();
    let post = findPropFromReactDOM(document.querySelector("article"), "post");
    let s = "";
    if (post && post.sidecarChildren) {
        for (const child of post.sidecarChildren) {
            if (child.displayResources) {
                s += encodeURIComponent(child.displayResources[child.displayResources.length - 1].src) + ";";
            }
        }
    }

    div.dataset["images"] = s;
})();
