# Monna Histea Engine 2
* Made by __HaxiDenti__

## Notes
* `Monna Histea Engine 2` Made as better and simpler version than `Monna Histea Engine` with several improvements and increasing simplicity
* It's an Engine for creating Interactive Fiction stories with dead-simple JavaScript functions and classes

## Project structure
* `src` - Folder where all your Game `API`. For example game logic or `DTO`'s
* `passages` - Folder where are all your Passage `ts` scripts that has `Passage.of` function calls
* `out` - Output folder where all your resources and main file `index.html`. Can be hosted

## First Passage (JavaScript only)
* Create story file (for ex:`story.ts`) in `passages` folder
* First passage is always `Start` then you can move between them by `Passage.goto` or passage links
```ts
Passage.of("Start", (s) => {
    s.print("Hello there!");
    s.pass("Go to the next passage", "Next passage");
});

Passage.of("Next passage", (s) => {
    s.print("This is next passage");
    s.pass("Return back", "Start");
});
```

## TypeScript Required
* Install __typescript__ with __Node NPM__
```bash
npm install -g typescript
```
* Make sure `tsc` is in your __PATH__

## Reference

* Text story
	* [Text story](doc/TextStory.md)
* Passages
    * [Passage API](doc/Passage.md)
    * [Passage Span API](doc/PassageSpan.md)
* Game API
    * [`Game` API](doc/GameAPI.md)
    * [`Game.v` Variable creator](doc/Game_v.md)
	* [`Configuration` API](doc/Config.md)
* Variables
    * [Variables API](doc/Variables.md)
    * [Temporary `_variables` & Clean API](doc/VariablesClean.md)
    * [`Game.v` Variable creator](doc/Game_v.md)
    * [`dto` Classes in Variables](doc/StoreClassesInVar.md)
    * [`isNull` Checks](doc/IsNull.md)
    * [`bind` Function Binding](doc/bind.md)
    * [Save/Load Variables into File](doc/SaveLoad.md)
* Audio
    * [Play Music](doc/Music.md)
    * [Play Sound](doc/Sound.md)
* Elements
    * [`el` API - Printing and DOM manipulation](doc/el.md)
    * [`el.span` Span API](doc/el_span.md)
    * [`el.***` Reusable Elements](doc/el_reusable_elements.md)
    * [`el.canvas` Canvas Element](doc/el_canvas.md)
    * [`el.select` Selector API](doc/el_select.md)
    * [`el.Sequence` API](doc/el_seq.md)
	* [`el.table` Table API](doc/Table.md)
    * [`render` method](doc/class_render.md)
	* [`reload` magic method](doc/class_reload.md)
* Util Functionality
    * [Util Random API](doc/Util_random.md)
    * [Util Span click disabler](doc/Util_declick.md)
    * [Util Lazy elements](doc/Util_Lazy.md)
    * [Util Pageable element](doc/Util_Pageable.md)
	* [Util String hash](doc/Util_hash.md)
	* [Util Clipboard](doc/Util_clipboard.md)
	* [Util Quests](doc/Quest.md)
* Effects
    * [Effects API](doc/Effects.md)
    * [Passage Positioning](doc/Positioning.md)
    * [Background Image](doc/Background.md)
* Timers
    * [Timer API - Engine related timers](doc/Timer.md)
* Loader (Caching)
    * [Loader API - Load media before use](doc/Loader.md)
	* [Onload functions on start](doc/Onloads.md)
* Code Generation
	* [Code Generator Doc](doc/CodeGen_WhatIs.md)
	* [Code Generator Arguments](doc/CodeGen_Args.md)
	* [Create Custom Generator](doc/CodeGen_CustomGen.md)
* Internal `+Generators`
	* [Builder Generator `+builder`](doc/CodeGen_Builder.md)

## Dev
* Git clone it to your local machine
* Open in `IDEA`
* Create new `RUN` config with home folder as `TEST_PROJECT` and argument `auto`
* `./gradlew cli` for creating `cli` JAR and script
