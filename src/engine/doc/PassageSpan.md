## Passage Span API

## Notes
* Passage Span is the same as `el.Span` but also has additional functionality related to current Passage
* Everytime passage is created, it uses `el.PassageSpan`


# API
* [More functions of `el.Span` ](el_span.md)
```ts
Passage.of("Sample", s => {

    // Go to another Passage by name and sending args
    // 
    // name - Name of the Passage to go to
    // args - Arguments to pass (Optional: By default is [])
    //
    // Returns true on success
    s.goto(name, args)


    // Reload current Passage with additional arguments (Optional)
    //
    // args - Arguments to pass (Optional: By default is [])
    s.reload(args)

    // Get current Passage arguments
    //
    // Returns array of arguments or empty list
    s.args()

    // Get exact argument by id or null
    //
    // id - id of the argument (0-indexed)
    s.arg<number>(0);

    // The rest of functionality could be reviewed by link above
})
```