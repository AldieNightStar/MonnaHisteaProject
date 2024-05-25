namespace monna {
    export class Releases implements el.IRenderable {
        
        private static releases = [
            ["2.2.2", "https://ouo.io/0kepQqN"],
        ]

        render(s: el.Span): void | Promise<void> {
            for (let [ver, url] of Releases.releases) {
                monna.href(s, "🧩Monna Histea - " + ver, url);
            }
        }

    }
}