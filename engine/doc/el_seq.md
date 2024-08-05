# `el.seq` Element - Linear Stories

## Notes
* Allows you to create linear passage with __Previous__ and __Next__ buttons
* Use `el.seq` __only__ to tell the story. Not to change backgrounds etc.
    * Changing backgrounds should be in __different passages__


## Usage
* First example
```js
// Create Sequence Element
// Allows to create next-passing story
//
// varName  - Name of the variable to store the state
el.seq("_seq")

    // Prints texrt
    .text("This is the first line")

    // Prints image and text (Text is optional)
    .image("Home.png", "This is the second one")

    // For custom logic.
    // 's' - el.Span argument
    .action(s => el.println(s, el.of("div")))

    // Link with ability to go to another passage
    // text    - (String) Link text
    // passage - (String) Passage to go to
    // cb      - (Optional: () => void) Callback on click
    .pass("Thanks for watching", "Passage 2", cb)

    // Returns Sequence itself
    .done();
```



# Settings
* Change `seq` settings
```js
el.seq("_seq")
    .text("Some text")
    .image("Home.png", "Some image")
    .done()

    // Setup goes here
    //
    // allowPrev   - (boolean) Allow or disallow "Previous" button
    // next        - (String) Next button caption
    // prev        - (Optional String) Previous button caption
    .setup(allowPrev, next, prev)


// ===============
// EXAMPLE 1
// ===============
el.seq("_seq")
    .text("Some text")
    .image("Home.png", "Some image")
    .done()
    .setup(true, "Next sentense", "Previous sentense"); // allow previous button

// ===============
// EXAMPLE 2
// ===============
el.seq("_seq")
    .text("Some text")
    .image("Home.png", "Some image")
    .done()
    .setup(false, "Next sentense"); // disallow previous button
```