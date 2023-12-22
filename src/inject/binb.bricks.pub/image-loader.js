const W = Promise;
const logger = require("../../logger2")(module.id);

function createCanvas(width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
ImageLoader.prototype.initCanvas = function (origWidth, origHeight, n) {
    logger.debug("initCanvas origWidth=", origWidth, "origHeight=", origHeight);
    this.canvas = null;
    this.y = 0;
    this.fix = [];
    let sumCanvasHeight = 0, scaling = origWidth / n[0].width;
    n.map(x => x.height).forEach(x => sumCanvasHeight += x);
    logger.debug("initCanvas sumCanvasHeight=", sumCanvasHeight, "scaling=", scaling, "origHeight=", origHeight);
    sumCanvasHeight *= scaling; // scaled
    logger.debug("initCanvas sumCanvasHeightScaled=", sumCanvasHeight);
    if (sumCanvasHeight > origHeight) {
        this.fix.push(0);
        let f = (sumCanvasHeight - origHeight) / (n.length - 1) ;
        for (let i = 0; i < n.length - 1; i++) {
            if (i !== n.length - 2) {
                this.fix.push(Math.ceil(-1 * f / scaling));
            } else {
                this.fix.push(Math.ceil(-1 * (f + ((sumCanvasHeight - origHeight) % (n.length - 1))) / scaling));
            }
        }
        logger.debug("initCanvas fix=", this.fix);
    } else {
        logger.debug("initCanvas no fix needed");
    }
}

ImageLoader.prototype.drawImage = function (canvasPart, imageMeta) {
    if (this.fix.length > 0) {
        this.y += this.fix.shift();
    }

    let newCanvas = createCanvas(imageMeta.width, this.y + imageMeta.height);
    let context = newCanvas.getContext("2d");
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;
    if (this.canvas != null) {
        context.drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height);
    }
    context.drawImage(canvasPart, 0, this.y, imageMeta.width, imageMeta.height);
    this.y += imageMeta.height;

    this.canvas = newCanvas;
}

a.prototype.get = function (r, e) {
    const theOne = this;
    logger.debug("getting canvas r=", r, "e=", e);
    if (0 === this.us.length) {
        this.us = [], this.as = [];
        for (var t = 0; t < 1; t++) {
            logger.debug("creating new canvas t=", t);
            var i = document.createElement("canvas");
            if (!i || !i.getContext) return W.reject(new Error("Can't create Canvas."));
            this.us.push(i), this.as.push(!1)
        }
    }
    return new W(function (i, t) {
        var n = function () {
            var t = theOne.fs(r, e);
            t ? i(t) : theOne.cs.push(n)
        };
        n()
    })
}, a.prototype.fs = function (t, i) {
    for (var n = 0; n < 1; n++) if (!this.as[n]) {
        this.as[n] = !0;
        var r = this.us[n];
        return r.width === t && r.height === i || (r.width = t, r.height = i), r.getContext("2d").clearRect(0, 0, r.width, r.height), r
    }
    return null
}, a.prototype.release = function (t) {
    var i = this.us.indexOf(t);
    if (0 <= i) {
        this.as[i] = !1;
        var n = this.cs.shift();
        n && n()
    }
}, a.prototype.us = [], a.prototype.as = [], a.prototype.cs = [];

function a() {
}

ImageLoader.prototype.Qe = function () {
    return this.ts = this.rs(0), W.resolve()
}, ImageLoader.prototype.rs = function (f) {
    return function (t, i, n, r, e, s, h, u, o, a) {
        t.drawImage(i, n, r, e + f, s + f, h, u, o, a)
    }
}, ImageLoader.prototype.ss = function (t, e) {
    const loader = this;
    return (null === loader.ts ? loader.Qe() : W.resolve()).then(function () {
        return loader.o.get(t.width, t.height)
    }).then(function (canvas) {
        logger.debug("running for canvas r=", canvas);
        var n = canvas.getContext("2d");
        return t.transfers.forEach(function (i) {
            i.coords.forEach(function (t) {
                loader.ts(n, e[i.index], t.xsrc, t.ysrc, t.width, t.height, t.xdest, t.ydest, t.width, t.height)
            })
        }), new W(function (resolve) {
            loader.drawImage(canvas, t);
            loader.o.release(canvas);
            resolve();
        })
    });
}, ImageLoader.prototype.rebuild = function (callback, imgDom, origWidth, origHeight) {
    var e = null;
    const loader = this;
    return W.resolve([imgDom]).then(function (i) {
        var t = (e = i).map(function (t) {
            logger.debug("naturalWidth=", t.naturalWidth, "naturalHeight=", t.naturalHeight)
            return {width: t.naturalWidth, height: t.naturalHeight}
        }), n = callback(t);
        loader.initCanvas(origWidth, origHeight, n);
        logger.debug("in promise chain 2 i=", i, "t=", t, "n=", n);
        return W.all(n.map(function (t) {
            let n = {width: t.width, height: t.height};
            return loader.ss(t, i);
        }))
    }).then(function () {
        return W.resolve(loader.canvas);
    })
}, ImageLoader.prototype.getCanvas = function () {
    return this.canvas;
}, ImageLoader.prototype.ts = null;

function ImageLoader() {
    this.canvas = null;
    this.context = null;
    this.y = 0;
    this.fix = [];
    this.o = new a();
}

module.exports = ImageLoader;
