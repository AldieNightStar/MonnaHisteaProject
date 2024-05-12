monna.passage("Books", "Книжкова лавочка", "Притулок книжечок", s => {
    const e = new monna.EmojiBook();
    const m = (name: string) => {
        s.linkln(e.pickBookEmoji() + name, () => {
            monna.message(s, name + " - У прогресі")
        });
    }

    m("Щоденники Хаксі");
    m("Приручена Гістерія");
    m("Nimmie del Ferio");
    m("Капітан РебітФіш");
    m("Хранитель Ангори");
    m("Енеопсис Марсіанський проект");
})