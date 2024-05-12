namespace monna {

    export class StoryTeller implements el.IRenderable {
        constructor(private parentSpan: el.Span, public story: string) { }

        render(s: el.Span): void | Promise<void> {
            this.parentSpan.rebuttonln("<< В розділи", () => {});
            this.parentSpan.hr();

            s.println(this.story);
        }
    }

    export class Stories implements el.IRenderable {
        render(s: el.Span): void | Promise<void> {
            const e = new monna.EmojiBook();
            const p = new Util.Pageable(Object.keys(STORIES), (chapterName) => {
                return el.link(e.pickBookEmoji() + chapterName, () => {
                    const story = STORIES[chapterName];
                    if (story) {
                        Engine.Effect.fadeChange(s.span, 600, () => {
                            s.clear();
                            s.print(new StoryTeller(s, story));
                        })
                    }
                })
            });

            s.print(p);
        }
    }

}