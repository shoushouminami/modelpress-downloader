(function(){
    "use strict";
    /**
     * search for the "post" props
     */
    let utils = require("../utils");
    let getLargeImg = require("../inject/twitter.com").getLargeImg;
    let getImagesFromReactGroupNode = function (dom) {
        //__reactInternalInstance$833n2mfz9lr.return.return.stateNode.props.children[0].props.children[0].props.mediaDetail.media_url_https
        for (const k of Object.keys(dom)) {
            if (k.startsWith("__reactInternalInstance$")) {
                let list = utils.getChildElement(dom[k], "return.return.stateNode.props.children.0.props.children".split("\."));
                if (list) {
                    let ret = [];
                    for (const l of list) {
                        utils.pushIfNew(ret,
                            getLargeImg(
                                utils.getChildElement(
                                    l, 
                                    "props.mediaDetail.media_url_https".split("\.")
                                )
                            )
                        );
                    }
    
                    return ret;
                }
            }
        }
    
        return null;
    }

    let helper = require("./helper-utils");
    helper.getOrCreateDataDiv();
    
    let group = document.querySelectorAll("div[aria-labelledby=modal-header] [role=group]");
    let ret = [];
    if (group.length > 0) {
        let images = getImagesFromReactGroupNode(group[0]);
        if (images && images.length > 0) {
            utils.pushArray(ret, images);
        } else {
            for (const img of group[0].querySelectorAll("img")) {
                ret.push(getLargeImg(img.src));
            }
        }
    }

    helper.saveImagesInDataDiv(ret);
})();
