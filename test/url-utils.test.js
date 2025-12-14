const { removeMwimgsSize, guessMediaType } = require("./../src/utils/url-utils");

describe("Test url-utils", () => {
    test("Test removeMwimgsSize", () => {
        expect(removeMwimgsSize("https://arweb.ismcdn.jp/mwimgs/a/5/650mw/img_a51243ea92baaa94cd74edae5642ac25191202.jpg"))
            .toBe("https://arweb.ismcdn.jp/mwimgs/a/5/-/img_a51243ea92baaa94cd74edae5642ac25191202.jpg");

        expect(removeMwimgsSize("https://times-abema.ismcdn.jp/mwimgs/2/8/1448w/img_282140be4f76eec3bfce4658a720451f268882.jpg"))
            .toBe("https://times-abema.ismcdn.jp/mwimgs/2/8/-/img_282140be4f76eec3bfce4658a720451f268882.jpg");

        expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/mwimgs/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg"))
            .toBe("https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg");

        expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/mwimgs/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100"))
            .toBe("https://mezamashi.ismcdn.jp/mwimgs/2/3/-/img_230c573a510a4b06b6b52fba385fad35124348.jpg?q=100");

        expect(removeMwimgsSize("https://mezamashi.ismcdn.jp/aaa/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg"))
            .toBe("https://mezamashi.ismcdn.jp/aaa/2/3/708/img_230c573a510a4b06b6b52fba385fad35124348.jpg");

    });

    describe("Test guessMediaType", () => {
        test("returns image for common image extensions", () => {
            expect(guessMediaType("photo.jpg")).toBe("image");
            expect(guessMediaType("photo.jpeg")).toBe("image");
            expect(guessMediaType("PIC.PNG")).toBe("image");
            expect(guessMediaType("icon.svg")).toBe("image");
            expect(guessMediaType("image.webp")).toBe("image");
        });

        test("returns image for ext jpg", () => {
            expect(guessMediaType("photo", "jpg", null)).toBe("image");
            expect(guessMediaType("myfile", "mp4", null)).toBe("video");
            expect(guessMediaType("photo", "what", null)).toBe("unknown");
        });

        test("returns image if prefered filename is .jpg", () => {
            expect(guessMediaType("myfile", null, "filename.jpg")).toBe("image");
            expect(guessMediaType("myfile", null, "filename")).toBe("unknown");
        });

        test("returns video for common video extensions", () => {
            expect(guessMediaType("movie.mp4")).toBe("video");
            expect(guessMediaType("clip.webm")).toBe("video");
            expect(guessMediaType("trailer.mkv")).toBe("video");
            expect(guessMediaType("film.MOV")).toBe("video");
        });

        test("returns audio for common audio extensions", () => {
            expect(guessMediaType("song.mp3")).toBe("audio");
            expect(guessMediaType("sound.wav")).toBe("audio");
            expect(guessMediaType("voice.ogg")).toBe("audio");
            expect(guessMediaType("music.FLAC")).toBe("audio");
        });

        test("returns html for html extensions", () => {
            expect(guessMediaType("index.html")).toBe("html");
            expect(guessMediaType("page.HTM")).toBe("html");
        });

        test("returns text for text-like extensions", () => {
            expect(guessMediaType("readme.txt")).toBe("text");
            expect(guessMediaType("data.csv")).toBe("text");
            expect(guessMediaType("config.json")).toBe("text");
            expect(guessMediaType("styles.css")).toBe("text");
            expect(guessMediaType("script.js")).toBe("text");
            expect(guessMediaType("document.xml")).toBe("text");
        });

        test("ignores query string and hash when extracting extension", () => {
            expect(guessMediaType("https://example.com/photo.jpg?size=large#anchor")).toBe("image");
            expect(guessMediaType("https://example.com/video.mp4#hash")).toBe("video");
            expect(guessMediaType("https://example.com/readme.txt?download=1")).toBe("text");
            expect(guessMediaType("https://djznowbmqickg.cloudfront.net/private/messages/files/144693-20251207-113651.mp4?Expires=1765272940&Signature=Pj~5Fz0mgJu0xc-s~3poI4uw~ed2U4aqhatjzS3Wx3we3cl1MTs5sJKEIVns576-4yb47C1CMPIDJDe05Ug__&Key-Pair-Id=K2")).toBe("video");
        });

        test("returns unknown when there is no extension", () => {
            expect(guessMediaType("https://example.com/path/without-ext")).toBe("unknown");
            expect(guessMediaType("noext")).toBe("unknown");
            expect(guessMediaType("noext?foo=bar")).toBe("unknown");
        });

        test("returns unknown for unrecognized extensions", () => {
            expect(guessMediaType("file.xyz")).toBe("unknown");
            expect(guessMediaType("archive.bin")).toBe("unknown");
        });

        test("returns unknown for non-string input", () => {
            expect(guessMediaType(null)).toBe("unknown");
            expect(guessMediaType(undefined)).toBe("unknown");
            expect(guessMediaType(123)).toBe("unknown");
            expect(guessMediaType({})).toBe("unknown");
        });

        test("handles uppercase and mixed-case extensions", () => {
            expect(guessMediaType("PIC.JPEG")).toBe("image");
            expect(guessMediaType("MUSIC.Mp3")).toBe("audio");
            expect(guessMediaType("Doc.HTML")).toBe("html");
        });

        test("detects image from data URL", () => {
            expect(
                guessMediaType("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...")
            ).toBe("image");

            expect(
                guessMediaType("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...")
            ).toBe("image");
        });

        test("detects audio from data URL", () => {
            expect(
                guessMediaType("data:audio/mp3;base64,AAAAGGZ0eXBtcDQyAAAAAG1wN...")
            ).toBe("audio");
        });

        test("detects video from data URL", () => {
            expect(
                guessMediaType("data:video/mp4;base64,AAAAHGZ0eXBpc29tAAAAAGlzb20...")
            ).toBe("video");
        });

        test("detects html/text from data URL", () => {
            expect(
                guessMediaType("data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3EHi%3C/body%3E%3C/html%3E")
            ).toBe("html");

            expect(
                guessMediaType("data:text/plain,hello%20world")
            ).toBe("text");

            expect(
                guessMediaType("data:application/json,{\"a\":1}")
            ).toBe("text");
        });

        test("returns unknown for data URL without recognizable mime", () => {
            expect(
                guessMediaType("data:application/octet-stream;base64,AAAABBBCCC")
            ).toBe("unknown");
        });
    });
});
