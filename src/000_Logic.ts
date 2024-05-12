namespace monna {
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
        link(s, "Повернутись назад", "Start", []);
        
        s.hr();
        s.printCenter(sub);

    }

    export function link(s: el.Span, name: string, passage: string, args: any[]) {
        s.printCenter(el.link(name, () => {
            Passage.goto(passage, args);
        }));
    }
}