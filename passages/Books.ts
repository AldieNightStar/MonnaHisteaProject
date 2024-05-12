monna.passage("Books", "Книжкова лавочка", "Притулок книжечок", s => {
    
    const books = ["📖", "📜", "📘", "📕", "📗", "📙", "🧾"];
    let bookId = -1;

    const pickBook = () => {
        bookId = (bookId + 1) % books.length;
        return books[bookId];
    }

    const m = (name: string) => s.linkln(pickBook() + name, () => window.alert("У прогресі"));

    m("Щоденники Хаксі");
    m("Приручена Гістерія");
    m("Поклик Редестри");
    m("Nimmie del Ferio");
    m("Зіткнення світів");
    m("Остання подорож");
    m("Капітан РебітФіш");
    m("Хранитель Ангори");
    m("Енеопсис Марсіанський проект");
})