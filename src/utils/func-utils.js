/**
 * Creates a scrip DOM that 'src' points to the filepath.
 * @param filepath
 */
function injectScriptFileToDOM (filepath) {
    let script = document.createElement('script');
    script.src = filepath;
    document.body.appendChild(script);
}

/**
 * Creates a scrip DOM that inner text is set to the given text
 * @param text
 */
function injectScriptTextToDOM (text) {
    let script = document.createElement('script');
    script.innerText = text;
    document.body.appendChild(script);
}

exports.injectScriptFileToDOM = injectScriptFileToDOM;
exports.injectScriptTextToDOM = injectScriptTextToDOM;
