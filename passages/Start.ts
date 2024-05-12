// This is your first passage
Passage.of("Start", s => {
    const phrase = monna.pickPhrase() + " (HaxiDenti)";
    monna.prefix("Monna Histea", s);

    s.passln("📘Монпедія", "Monpedia", [0]);
    s.passln("📜Короткі історії", "Stories", [0]);
    s.passln("⏲️Новини", "News", [0]);
    s.passln("📖Книги", "Books", [0]);
    s.passln("🧩Monna Histea Engine", "Engine", [0]);
    s.passln("🧩Monna Histea Engine - Прилавок Ассетів", "Assets", [0]);

    s.hr();
    s.printCenter(phrase);
});