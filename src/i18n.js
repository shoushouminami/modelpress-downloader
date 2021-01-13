
function getScopedName(id, scope) {
    if (id != null) {
        if (scope != null) {
            return scope + "_" + id;
        }

        return id;
    }

    return null;
}

export const AUTO_BIND_CLASS = "i18n-auto-bind";

export function getText(id, scope, substitution) {
    return (chrome.i18n.getMessage(getScopedName(id, scope), substitution) ||
        chrome.i18n.getMessage(getScopedName(id, null), substitution));
}

export function bindDomTextById(dom, scope) {
    dom.innerText = getText(dom.id, scope);
}

export function autoBind(scope){
    document.querySelectorAll("." + this.AUTO_BIND_CLASS).forEach(
        dom => {
            if (dom.id != null) {
                this.bindDomTextById(dom, scope);
            }
        }
    )
}


