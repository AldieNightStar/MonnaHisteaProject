namespace monna {
    export class Releases implements el.IRenderable {
        
        private static releases = [
            ["2.3.0", "https://ouo.io/ywh4fmo"],
        ]

        render(s: el.Span): void | Promise<void> {
            for (let [ver, url] of Releases.releases) {
                monna.href(s, "🧩Monna Histea - " + ver, url);
            }
        }

    }
}