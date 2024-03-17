/**
 * Create new canvas handle with given width and height
 * @param width
 * @param height
 * @return {{canvas: HTMLCanvasElement, dx: number, dy: number, context: CanvasRenderingContext2D, width, height}}
 */
function createCanvas(width, height) {
    let canvas = document.createElement("canvas")
    canvas.width = width;
    canvas.height = height;

    let context = canvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;

    return {
        canvas: canvas,
        context: context,
        height: height,
        width: width,
        dx: 0,
        dy: 0
    }
}

/**
 * Draw the given canvas|image dom onto the given canvas handle
 * @param handle
 * @param drawable
 * @return {*}
 * @private
 */
function _draw(handle, drawable) {
    handle.context.drawImage(drawable, handle.dx, handle.dy);
    handle.dx += drawable.width;
    return handle;
}

function _return(handle) {
    handle.dx = 0;
    handle.dy = handle.height;
}

/**
 * Expands the canvas handle into new width and height.
 * @param handle
 * @param newWidth
 * @param newHeight
 * @return {{canvas: HTMLCanvasElement, dx: number, dy: number, context: CanvasRenderingContext2D, width, height}}
 */
function expand(handle, newWidth, newHeight) {
    let newHandle = createCanvas(Math.max(handle.width, newWidth), Math.max(handle.height, newHeight));
    _draw(newHandle, handle.canvas);
    newHandle.dx = handle.dx;
    newHandle.dy = handle.dy;
    return newHandle;
}

/**
 * Create a new canvas handle with the size of the image dom, and draw the image onto the canvas
 * @param dom
 * @param width width of the canvas. dom.width is used if not given.
 * @param height height of the canvas. dom.height is used if not given.
 * @return {*}
 */
function createCanvasAndDrawImage(dom, width, height) {
    return _draw(
        createCanvas(width || dom.width, height || dom.height),
        dom
    );
}

/**
 * Draws the image dom to the right of the current draw point (dx, dy), expands the canvas handle if required.
 * Returns the existing handle, or the new handle if expanded.
 * @param handle
 * @param dom
 * @return {*}
 */
function drawRight(handle, dom) {
    if (handle.dx + dom.width <= handle.width) {
        return _draw(handle, dom);
    } else {
        // expand canvas
        let newHandle = expand(handle, handle.width + dom.width, Math.max(handle.height, dom.height));
        return _draw(newHandle, dom);
    }
}

function drawBelow(handle, dom) {
    _return(handle);
    let newHandle = expand(handle, Math.max(handle.width, dom.width), handle.height + dom.height);
    return _draw(newHandle, dom);
}

function toDataUrl(handle) {
    return handle.canvas.toDataURL("image/jpeg", 1);
}

exports.createCanvas = createCanvas;
exports.createCanvasAndDrawImage = createCanvasAndDrawImage;
exports.drawRight = drawRight;
exports.drawBelow = drawBelow;
exports.toDataUrl = toDataUrl;
