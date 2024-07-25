namespace monna {
    export class Releases implements el.IRenderable {
        
        private static releases = [
            ["2.5.0", "https://ouo.io/UrC2wc"],
        ]

        render(s: el.Span): void | Promise<void> {
            for (let [ver, url] of Releases.releases) {
                monna.href(s, "🧩Monna Histea - " + ver, url);
            }
        }

    }
}