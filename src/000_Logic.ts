namespace monna {
    export class EmojiBook {
        private static emoji = ["📖", "📜", "📘", "📕", "📗", "📙", "🧾"];
        private emojiId = -1;

        pickBookEmoji(): string {
            this.emojiId = (this.emojiId + 1) % EmojiBook.emoji.length;
            return EmojiBook.emoji[this.emojiId];
        }

    }

    export function passage(name: string, title: string, sub: string, cb: (s: el.Span) => void | Promise<void>) {
        Passage.of(name, async s => {
            prefix(title, s);
            await cb(s);
            footer(sub, s);
        });
    }

    export function prefix(title: string, s: el.Span) {
        Engine.Bg.set("https://i.ibb.co/k5J2Ygs/wp.jpg");
        Engine.Pos.center();
        s.title(title, true);
        s.hr();
    }

    export function footer(sub: string, s: el.Span) {
        s.hr();
        s.passln("На початковий Вузол", "Start", []);
        
        s.hr();
        s.printCenter(sub);
    }

    export function href(s: el.Span, name: string, link: string) {
        s.println(el.of('a', a => {
            a.innerText = name;
            a.href = link;
        }));
    }

    export function message(s: el.Span, message: string) {
        Engine.Effect.fadeChange(s.span, 600, () => {
            s.clear();
            s.println(message);
            s.relink("Зрозуміло", () => {});
        })
    }
}