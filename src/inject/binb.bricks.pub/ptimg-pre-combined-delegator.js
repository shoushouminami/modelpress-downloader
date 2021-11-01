const logger = require("../../logger2")(module.id);

const Rectangle = (Object.defineProperty(N.prototype, "right", {
    get: function () {
        return this.left + this.width
    }, set: function (t) {
        this.width = t - this.left
    }, enumerable: !0, configurable: !0
}), Object.defineProperty(N.prototype, "bottom", {
    get: function () {
        return this.top + this.height
    }, set: function (t) {
        this.height = t - this.top
    }, enumerable: !0, configurable: !0
}), N.intersect = function (t, i) {
    var n = t.left, r = t.left + t.width, e = t.top, s = t.top + t.height, h = i.left, u = i.left + i.width,
        o = i.top, a = i.top + i.height;
    if (n < u && h < r && e < a && o < s) {
        var f = Math.max(n, h), c = Math.max(e, o);
        return new N(f, c, Math.min(r, u) - f, Math.min(s, a) - c)
    }
    return null
}, N.union = function (t, i) {
    var n = t.left, r = t.left + t.width, e = t.top, s = t.top + t.height, h = i.left, u = i.left + i.width,
        o = i.top, a = i.top + i.height, f = Math.min(n, h), c = Math.min(e, o);
    return new N(f, c, Math.max(r, u) - f, Math.max(s, a) - c)
}, N);

function N(t, i, n, r) {
    void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === r && (r = 0), this.left = t, this.top = i, this.width = n, this.height = r
}


var b = (e.prototype.getTemporaryViewSize = function () {
    return {width: this.Bs, height: this.Hs}
}, e.prototype.getPreloadImages = function () {
    var u = this;
    return {
        i: {
            srcs: [this._s], callback: function (t) {
                var i = t[0], n = u.$s(i);

                function r(t) {
                    var r = u.zs(t), e = [];
                    s.forEach(function (t) {
                        var i = new Rectangle(t.xdest, t.ydest, t.width, t.height),
                            n = Rectangle.intersect(r, i);
                        null !== n && e.push({
                            xsrc: t.xsrc + (n.left - t.xdest),
                            ysrc: t.ysrc + (n.top - t.ydest),
                            width: n.width,
                            height: n.height,
                            xdest: n.left - r.left,
                            ydest: n.top - r.top
                        })
                    });
                    var i = {index: 0, coords: e};
                    h.push({width: r.width, height: r.height, transfers: [i]})
                }

                u.hn = {width: n.width, height: n.height};
                for (var s = n.transfers[0].coords, h = [], e = 0; e < u.Gs; e++) r(e);
                return h
            }
        }
    }
}, e.prototype.callbackLoadedImage = function (t, i) {
    var n = this;
    if ("i" === t && i.length === this.Gs) {
        this.Rs = {};
        for (var r = 0; r < this.Gs; r++) {
            var e = "i" + r.toString();
            this.Rs[e] = {src: i[r].src, width: i[r].width, height: i[r].height}
        }
        var s = [];
        for (r = 0; r < this.Gs; r++) {
            var h = this.zs(r);
            s.push({
                resid: "i" + r.toString(),
                xsrc: 0,
                ysrc: 0,
                width: h.width,
                height: h.height,
                xdest: h.left,
                ydest: h.top
            })
        }
        this.Us = {
            width: this.hn.width,
            height: this.hn.height,
            coords: s
        }, this.Xs && (this.Us.areas = this.Xs.map(function (t) {
            return {
                href: t.href,
                left: t.left * n.hn.width / n.Bs,
                top: t.top * n.hn.height / n.Hs,
                right: t.right * n.hn.width / n.Bs,
                bottom: t.bottom * n.hn.height / n.Hs
            }
        }))
    }
}, e.prototype.zs = function (t) {
    var i = this.hn.height, n = Math.ceil((i + this.Vs * (this.Gs - 1)) / this.Ys),
        r = Math.ceil(t * n / this.Gs) * this.Ys, e = Math.ceil((t + 1) * n / this.Gs) * this.Ys,
        s = n * this.Ys, h = r * i / s, u = e * i / s, o = e - r,
        a = 1 === this.Gs ? 0 : Math.round(h + (u - h - o) * t / (this.Gs - 1));
    return new Rectangle(0, a, this.hn.width, o)
}, e.prototype.getResources = function () {
    return this.Rs
}, e.prototype.getViews = function () {
    return this.Us ? [this.Us] : null
}, e);

function e(t, i, n, r, e) {
    this._s = "", this.Bs = 0, this.Hs = 0, this.Xs = null, this.$s = null, this.Rs = null, this.Us = null, this.hn = null, this.Gs = 3, this.Ys = 8, this.Vs = 4, this._s = t, this.Bs = i, this.Hs = n, this.Xs = r, this.$s = e
}

module.exports = e;
