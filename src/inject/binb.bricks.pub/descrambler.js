const utils = require("../../utils.js");
const logger = require("../../logger2")(module.id);
const isYanmaga = require("../../globals").getWindow().location.host.indexOf("yanmaga.jp") > -1

var f = (s.prototype.vt = function () {
    return null !== this.It
}, s.prototype.Ot = function (t) {
    var i = 2 * this.T * this.xt, n = 2 * this.j * this.xt;
    return t.width >= 64 + i && t.height >= 64 + n && t.width * t.height >= (320 + i) * (320 + n)
}, s.prototype.dt = function (t) {
    return this.Ot(t) ? {width: t.width - 2 * this.T * this.xt, height: t.height - 2 * this.j * this.xt} : t
}, s.prototype.gt = function (t) {
    if (!this.vt()) return null;
    if (!this.Ot(t)) return [{xsrc: 0, ysrc: 0, width: t.width, height: t.height, xdest: 0, ydest: 0}];
    for (var i = t.width - 2 * this.T * this.xt, n = t.height - 2 * this.j * this.xt, r = Math.floor((i + this.T - 1) / this.T), e = i - (this.T - 1) * r, s = Math.floor((n + this.j - 1) / this.j), h = n - (this.j - 1) * s, u = [], o = 0; o < this.T * this.j; ++o) {
        var a = o % this.T, f = Math.floor(o / this.T),
            c = this.xt + a * (r + 2 * this.xt) + (this.Tt[f] < a ? e - r : 0),
            l = this.xt + f * (s + 2 * this.xt) + (this.Pt[a] < f ? h - s : 0), v = this.It[o] % this.T,
            d = Math.floor(this.It[o] / this.T), g = v * r + (this.Ct[d] < v ? e - r : 0),
            b = d * s + (this.At[v] < d ? h - s : 0), p = this.Tt[f] === a ? e : r,
            m = this.Pt[a] === f ? h : s;
        0 < i && 0 < n && u.push({xsrc: c, ysrc: l, width: p, height: m, xdest: g, ydest: b})
    }
    return u
}, s.prototype.Et = function (t) {
    var i, n = [], r = [], e = [];
    for (i = 0; i < this.T; i++) n.push(s.kt[t.charCodeAt(i)]);
    for (i = 0; i < this.j; i++) r.push(s.kt[t.charCodeAt(this.T + i)]);
    for (i = 0; i < this.T * this.j; i++) e.push(s.kt[t.charCodeAt(this.T + this.j + i)]);
    return {t: n, n: r, p: e}
}, s.kt = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, 63, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1], s);

function s(t, i) {
    this.It = null;
    var n = t.match(/^=([0-9]+)-([0-9]+)([-+])([0-9]+)-([-_0-9A-Za-z]+)$/),
        r = i.match(/^=([0-9]+)-([0-9]+)([-+])([0-9]+)-([-_0-9A-Za-z]+)$/);
    if (null !== n && null !== r && n[1] === r[1] && n[2] === r[2] && n[4] === r[4] && "+" === n[3] && "-" === r[3] && (this.T = parseInt(n[1], 10), this.j = parseInt(n[2], 10), this.xt = parseInt(n[4], 10), !(8 < this.T || 8 < this.j || 64 < this.T * this.j))) {
        var e = this.T + this.j + this.T * this.j;
        if (n[5].length === e && r[5].length === e) {
            var s = this.Et(n[5]), h = this.Et(r[5]);
            this.Ct = s.n, this.At = s.t, this.Tt = h.n, this.Pt = h.t, this.It = [];
            for (var u = 0; u < this.T * this.j; u++) this.It.push(s.p[h.p[u]])
        }
    }
}

var u = (r.prototype.vt = function () {
    return !0
}, r.prototype.Ot = function (t) {
    return !1
}, r.prototype.dt = function (t) {
    return t
}, r.prototype.gt = function (t) {
    return [{xsrc: 0, ysrc: 0, width: t.width, height: t.height, xdest: 0, ydest: 0}]
}, r);

function r() {
}

var a = (e.prototype.vt = function () {
    return null !== this.Mt && null !== this.jt
}, e.prototype.Ot = function (t) {
    return 64 <= t.width && 64 <= t.height && 102400 <= t.width * t.height
}, e.prototype.dt = function (t) {
    return t
}, e.prototype.gt = function (t) {
    if (!this.vt()) return null;
    if (!this.Ot(t)) return [{xsrc: 0, ysrc: 0, width: t.width, height: t.height, xdest: 0, ydest: 0}];
    for (var i = [], n = t.width - t.width % 8, r = Math.floor((n - 1) / 7) - Math.floor((n - 1) / 7) % 8, e = n - 7 * r, s = t.height - t.height % 8, h = Math.floor((s - 1) / 7) - Math.floor((s - 1) / 7) % 8, u = s - 7 * h, o = this.Mt.piece.length, a = 0; a < o; a++) {
        var f = this.Mt.piece[a], c = this.jt.piece[a];
        i.push({
            xsrc: Math.floor(f.x / 2) * r + f.x % 2 * e,
            ysrc: Math.floor(f.y / 2) * h + f.y % 2 * u,
            width: Math.floor(f.w / 2) * r + f.w % 2 * e,
            height: Math.floor(f.h / 2) * h + f.h % 2 * u,
            xdest: Math.floor(c.x / 2) * r + c.x % 2 * e,
            ydest: Math.floor(c.y / 2) * h + c.y % 2 * u
        })
    }
    var l = r * (this.Mt.ndx - 1) + e, v = h * (this.Mt.ndy - 1) + u;
    return l < t.width && i.push({
        xsrc: l,
        ysrc: 0,
        width: t.width - l,
        height: v,
        xdest: l,
        ydest: 0
    }), v < t.height && i.push({xsrc: 0, ysrc: v, width: t.width, height: t.height - v, xdest: 0, ydest: v}), i
}, e.prototype.Et = function (t) {
    if (!t) return null;
    var i = t.split("-");
    if (3 != i.length) return null;
    var n = parseInt(i[0], 10), r = parseInt(i[1], 10), e = i[2];
    if (e.length != n * r * 2) return null;
    for (var s, h, u, o, a = (n - 1) * (r - 1) - 1, f = n - 1 + a, c = r - 1 + f, l = 1 + c, v = [], d = 0; d < n * r; d++) s = this.St(e.charAt(2 * d)), h = this.St(e.charAt(2 * d + 1)), d <= a ? o = u = 2 : d <= f ? (u = 2, o = 1) : d <= c ? (u = 1, o = 2) : d <= l && (o = u = 1), v.push({
        x: s,
        y: h,
        w: u,
        h: o
    });
    return {ndx: n, ndy: r, piece: v}
}, e.prototype.St = function (t) {
    var i = 0, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(t);
    return n < 0 ? n = "abcdefghijklmnopqrstuvwxyz".indexOf(t) : i = 1, i + 2 * n
}, e);

function e(t, i) {
    this.Mt = null, this.jt = null;
    var n = this.Et(t), r = this.Et(i);
    n && r && n.ndx === r.ndx && n.ndy === r.ndy && (this.Mt = n, this.jt = r)
}

function Descrambler() {
}

Descrambler.prototype.lt = function (t) {
    var i = [0, 0];
    if (t) {
        for (var n = t.lastIndexOf("/") + 1, r = t.length - n, e = 0; e < r; e++) i[e % 2] += t.charCodeAt(e + n);
        i[0] %= 8, i[1] %= 8
    }
    var s = this.V.ptbl[i[0]], h = this.V.ctbl[i[1]];
    return "=" === h.charAt(0) && "=" === s.charAt(0) ? new f(h, s) : h.match(/^[0-9]/) && s.match(/^[0-9]/) ? new a(h, s) : "" === h && "" === s ? new u : null
}

Descrambler.prototype.getImageDescrambleCoords = function (src, i, n) {
    var r = this.lt(src);
    if (!r || !r.vt()) return null;
    var e = r.dt({width: i, height: n});
    return {width: e.width, height: e.height, transfers: [{index: 0, coords: r.gt({width: i, height: n})}]}
}

const b = {Sbc: 0, Direct: 1, Rest: 2}
Descrambler.prototype.getImageUrl = function (t) {
    var n, r = this, e = "singlequality" === this.tt.imageClass;
    let V = this.V;
    if (V.servertype === b.Direct) {
        var s = e ? "M.jpg" : "M_H.jpg";
        n = `${V.sbcurl}${t}/${s}?dmytime=${this.tt.contentDate}`;
    } else {
        V.servertype === b.Rest ?
            (n = `${V.sbcurl}img/${t}`) :
            (n = `${V.sbcurl}sbcGetImg.php?cid=${this.cid}&src=${encodeURIComponent(t)}${this.V.token ? "&p=" + this.V.token : ""}`);
    }
    return n;
}

Descrambler.prototype.init = function (ptbinb, cid) {
    const descrambler = this;
    return new Promise(function (resolve, reject) {
        const salt = Descrambler.generateSalt(cid);
        const u0 = utils.getSearchParam(ptbinb).get("u0") || null;
        descrambler.cid = cid;
        utils.fetchUrl(`${ptbinb}&cid=${cid}&k=${salt}`, 2, 1, {timeout: 8000})
            .then(function (respText) {
                try {
                    let resp = JSON.parse(respText);
                    logger.debug("resp=", resp);
                    let V = Descrambler.z(resp, cid, salt);
                    logger.debug("f=init V=", V);
                    if (V instanceof Error) return Promise.reject(V);
                    descrambler.V = V;
                    logger.debug("f=init descrambler=", this);
                    let contentUrl;
                    let funcName = null;
                    switch (V.servertype) {
                        case b.Direct:
                            contentUrl = `${V.sbcurl}content.js`
                            funcName = "DataGet_Content"
                            break;
                        case b.Rest:
                            contentUrl = `${V.sbcurl}content`
                            break;
                        default:
                            contentUrl = `${V.sbcurl}sbcGetCntnt.php?cid=${cid}&p=${V.token}`
                    }
                    if (u0) {
                        contentUrl += contentUrl.indexOf("?") > -1 ? `&u0=${u0}` : `?u0=${u0}`;
                    }
                    utils.fetchUrl(contentUrl, 1, 1, {
                        withCredentials:isYanmaga,
                        timeout: 8000
                    })
                        .then(function (respText) {
                            let resp2;
                            if (funcName) {
                                logger.debug("funcName=", funcName, "respText=", respText);
                                let jsonText = respText.replace(funcName + "(", "");
                                jsonText = jsonText.substring(0, jsonText.lastIndexOf(")"));
                                logger.debug("jsonText=", jsonText);
                                resp2 = JSON.parse(jsonText);
                            } else {
                                resp2 = JSON.parse(respText);
                            }
                            logger.debug("resp2=", resp2);
                            if (resp2 && resp2["ttx"]) {
                                descrambler.tt = {
                                    imageClass: resp2["ImageClass"],
                                    contentDate: resp2["ContentDate"]
                                };
                                resolve(resp2["ttx"]);
                            } else {
                                reject("ttx not found");
                            }
                        }, function (e) {
                            reject(e);
                        })
                } catch (e) {
                    reject(e);
                }
            }, function (errorMsg) {
                reject(errorMsg);
            });
    });
}

Descrambler.generateSalt = function (contentId) {
    return Descrambler.H(contentId);
}

Descrambler.H = function (t) {
    var n = getRandomString(16), i = Array(Math.ceil(16 / t.length) + 1).join(t), r = i.substr(0, 16),
        e = i.substr(-16, 16), s = 0, h = 0, u = 0;
    return n.split("").map(function (t, i) {
        return s ^= n.charCodeAt(i), h ^= r.charCodeAt(i), u ^= e.charCodeAt(i), t + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[s + h + u & 63]
    }).join("")
}

function getRandomString (t, i) {
    for (var n = i || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", r = n.length, e = "", s = 0; s < t; s++) e += n.charAt(Math.floor(Math.random() * r));
    return e
}

Descrambler.pt = function (t, i, n) {
    for (var r = t + ":" + i, e = 0, s = 0; s < r.length; s++) e += r.charCodeAt(s) << s % 16;
    0 == (e &= 2147483647) && (e = 305419896);
    var h = "", u = e;
    for (s = 0; s < n.length; s++) {
        u = u >>> 1 ^ 1210056708 & -(1 & u);
        var o = (n.charCodeAt(s) - 32 + u) % 94 + 32;
        h += String.fromCharCode(o)
    }
    try {
        return JSON.parse(h)
    } catch (t) {
    }
    return null
}

function toNumberArray(t) {
    if (!Array.isArray(t)) throw TypeError();
    if (t.some(function (t) {
        return "number" != typeof t
    })) throw TypeError();
    return t
}

function toStringArray(t) {
    if (!Array.isArray(t)) throw TypeError();
    if (t.some(function (t) {
        return "string" != typeof t
    })) throw TypeError();
    return t
}

/**
 *
 * @param t - json
 * @param i - content id
 * @param n - salt (k)
 * @return {{servertype: number, ctbl, sbcurl: string, viewmode: number, ptbl, ttbl, stbl, token: *}|Error}
 */
Descrambler.z = function (t, i, n) {
    if (!("result" in t)) return new Error("Is not a return value of bibGetCntntInfo API.");
    if (1 !== t.result) return new Error("Failed to execute bibGetCntntInfo API.");
    if (!("items" in t && Array.isArray(t.items))) return new Error("There is no item.");
    var e = t.items[0];
    if (!("ContentsServer" in e && e.ContentsServer)) return new Error("Undefined ContentsServer.");
    if ("string" != typeof e.ContentsServer) return new Error("Invalid type of ContentsServer.");
    var s = e.ContentsServer.replace(/\/?$/, "/"), h = s;
    if (!("ViewMode" in e)) return new Error("Missing ViewMode.");
    var u = -1, o = "ServerType" in e ? parseInt(e.ServerType, 10) : 0;
    if (0 === o) u = 0; else if (1 === o) u = 1; else {
        if (2 !== o) return new Error("Invalid value of ServerType.");
        u = 2
    }
    var a = "p" in e ? e.p : null;
    if (a) {
        if (null !== a && "string" != typeof a) return new Error("Invalid type of request token.")
    } else a = "null";
    var f = -1, c = parseInt(e.ViewMode, 10);
    if (-1 === c) return new Error("Can't read via ViewMode.");
    if (1 === c) f = 1; else if (2 === c) f = 2; else {
        if (3 !== c) return new Error("Invalid value of ViewMode.");
        f = 3
    }
    if (!("stbl" in e && "ttbl" in e && "ctbl" in e && "ptbl" in e)) return new Error("Missing scramble table.");
    try {
        var l = toNumberArray(Descrambler.pt(i, n, e.stbl)), v = toNumberArray(Descrambler.pt(i, n, e.ttbl)),
            d = toStringArray(Descrambler.pt(i, n, e.ctbl)), g = toStringArray(Descrambler.pt(i, n, e.ptbl))
    } catch (t) {
        return new Error("Invalid format of scramble table.")
    }
    return {sbcurl: h, servertype: u, viewmode: f, token: a, stbl: l, ttbl: v, ctbl: d, ptbl: g}
}

module.exports = Descrambler;
