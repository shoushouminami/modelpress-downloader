(async function () {
    "use strict";
    const toUrl = function (canvas) {
        return canvas.toDataURL("image/jpeg", 1);
    }

    const getCanvasId = function (canvas) {
        let pages = document.querySelectorAll(".-cv-page");
        if (canvas.parentElement && canvas.parentElement.parentElement && canvas.parentElement.parentElement.parentElement) {
            let page = canvas.parentElement.parentElement.parentElement;
            for (let i = 0; i < pages.length; i++) {
                if (pages[i] === page) {
                    return i;
                }
            }
        }
        return -1;
    }

    const helperUtils = require("./helper-utils");
    let midDiv = helperUtils.getOrCreateDataDiv();
    let pages = document.getElementById("xCVPages");
    if (pages) {
        new MutationObserver(function (events) {
            let canvases = document.querySelectorAll(".-cv-page.mode-rendered canvas");
            for (const canvas of canvases) {
                for (const attr of Object.keys(canvas.parentElement.dataset)) {
                    if (attr.indexOf("gtmVisRecentOnScreen") > -1) {
                        let id = getCanvasId(canvas);
                        if (!helperUtils.hasCachedId(id)) {
                            helperUtils.attachInvisibleImage(midDiv, toUrl(canvas), id + ".jpg");
                            helperUtils.cachedId(id);
                        }
                    }
                }
            }
        }).observe(pages, {attributes: true, childList: true, subtree: true});
    }

    const loadAll = function () {
        let pages = document.querySelectorAll(".-cv-page");
        let i = 0;
        const loadNext = function () {
            if (i < pages.length) {
                pages[i++].scrollIntoView();
                setTimeout(loadNext, 500);
            } else {
                helperUtils.doneSolvingMaze();
            }
        }
        helperUtils.startSolvingMaze();
        loadNext();
    }

    const getCellId = function (span) {
        let spans = document.querySelectorAll(".-cv-sp-map-piece");
        for (let i = 0; i < spans.length; i++) {
            if (spans[i] === span) {
                return i;
            }
        }
        return -1;
    }

    const currentCell = function () {
        return document.querySelector(".-cv-sp-map-piece.mode-passed.mode-current");
    }

    const nextCellId = function (cid, move, rowSize) {
        switch (move) {
            case "up":
                return cid - rowSize;
            case "right":
                return cid % rowSize === (rowSize - 1) ? -1 : cid + 1;
            case "down":
                if ((cid + rowSize) > (rowSize * rowSize - 1)) {
                    return -1;
                }
                return cid + rowSize;
            case "left":
                return cid % rowSize === 0 ? -1 : cid - 1;
        }
    }

    const runAndWait = async function (clickFunc, timeMs) {
        await new Promise((resolve, reject) => {
            clickFunc();
            setTimeout(resolve, timeMs);
        });
    }

    const solveMatrix = async function () {
        let open = []; // spans
        let closed = []; // sids
        let size = document.querySelectorAll(".-cv-sp-map-piece").length;
        let rowSize = Math.sqrt(size);
        let current;

        const tryCell = async function (cid, nextId, dom) {
            if (nextId > -1 && closed.indexOf(nextId) === -1 && open.indexOf(nextId) === -1) {
                await runAndWait(() => dom.click(), 500);
                if (current !== currentCell()) {
                    open.push(cid);
                    open.push(nextId);
                    return true;
                } else {
                    closed.push(nextId);
                }
            }

            return false;
        }

        open.push(getCellId(currentCell()));
        // DFS
        while (open.length > 0) {
            let cid = open.pop();
            current = currentCell();

            let upId = nextCellId(cid, "up", rowSize);
            if (await tryCell(cid, upId, document.getElementById("xCVSpUp"))) {
                continue;
            }

            let rightId = nextCellId(cid, "right", rowSize);
            if (await tryCell(cid, rightId, document.getElementById("xCVSpRight"))){
                continue;
            }

            // down
            let downId = nextCellId(cid, "down", rowSize);
            if (await tryCell(cid, downId, document.getElementById("xCVSpDown"))) {
                continue;
            }

            let leftId = nextCellId(cid, "left", rowSize);
            if (await tryCell(cid, leftId, document.getElementById("xCVSpLeft"))) {
                continue;
            }

            // no more neighbors to explore
            // put current cell into close set and backtrack
            closed.push(cid);
            if (open[open.length - 1]) {
                switch (open[open.length - 1]) {
                    case upId:
                        await runAndWait(() => document.getElementById("xCVSpUp").click(), 500);
                        break;
                    case rightId:
                        await runAndWait(() => document.getElementById("xCVSpRight").click(), 500);
                        break;
                    case downId:
                        await runAndWait( () => document.getElementById("xCVSpDown").click(), 500);
                        break;
                    case leftId:
                        await runAndWait( () => document.getElementById("xCVSpLeft").click(), 500);
                        break;
                }
            }
        }
    }

    if (document.getElementById("xCVSpMap") != null) {
        await solveMatrix();
    } else {
        loadAll();
    }
})();
