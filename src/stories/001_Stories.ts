namespace monna {

    export class StoryTeller implements el.IRenderable {
        constructor(public story: string) { }

        render(s: el.Span): void | Promise<void> {
            s.println(this.story);
        }

    }

    export class SubStory implements el.IRenderable {
        constructor(public subBook: { [key: string]: string }) { }

        render(s: el.Span): void | Promise<void> {
            const e = new monna.EmojiBook();

            Object.keys(this.subBook).forEach(chapterName => {

                s.clinkln(e.pickBookEmoji() + chapterName, () => {
                    const story = this.subBook[chapterName];
                    s.println(new StoryTeller(story));
                });

            })

        }
    }

    export class Stories implements el.IRenderable {
        render(s: el.Span): void | Promise<void> {
            const e = new monna.EmojiBook();
            Object.keys(STORIES).forEach(name => {
                const book = STORIES[name];
                s.clinkln(e.pickBookEmoji() + name, () => {
                    s.print(new SubStory(book));
                })
            });
        }
    }

}