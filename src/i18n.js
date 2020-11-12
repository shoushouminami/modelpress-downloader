
const getScopedName = function (id, scope) {
    if (id != null) {
        if (scope != null) {
            return scope + "_" + id;
        }

        return id;
    }

    return null;
}

exports.AUTO_BIND_CLASS = "i18n-auto-bind";

exports.bindDomTextById = function (dom, scope) {
    let text = chrome.i18n.getMessage(getScopedName(dom.id, scope));
    if (!text) {
        text = chrome.i18n.getMessage(getScopedName(dom.id, null));
    }

    dom.innerText = text;
}

exports.autoBind = function (scope) {
    document.querySelectorAll("." + this.AUTO_BIND_CLASS).forEach(
        dom => {
            if (dom.id != null) {
                this.bindDomTextById(dom, scope);
            }
        }
    )
}


