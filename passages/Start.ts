// This is your first passage
Passage.of("Start", s => {
    const phrase = monna.pickPhrase() + " (HaxiDenti)";
    monna.prefix("Monna Histea", s);

    monna.link(s, "📘Монпедія", "Monpedia", [0]);
    monna.link(s, "📜Короткі історії", "Stories", [0]);
    monna.link(s, "⏲️Новини", "News", [0]);
    monna.link(s, "📖Книги", "Books", [0]);
    monna.link(s, "🧩Monna Histea Engine", "Engine", [0]);

    

    s.hr();
    s.printCenter(phrase);
});