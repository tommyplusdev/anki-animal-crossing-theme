# anki-animal-crossing-theme

<img width="727" alt="cloze_programming_anki_AC_2_JP" src="https://user-images.githubusercontent.com/116316499/235375635-113cbf00-516b-4859-8b01-9690246a26e8.png">

## About
I was inspired by the UI design from Animal Crossing, so I decided to make something similar for Anki.
Considering I have a dark mode theme of Anki, this theme caters for the Light Mode users.

This theme is sort of a branch from the original Dark Mode, but it features a new rewrite of the code, making it much easier to read and manage for future additions.

Unlike the minimalist mode, this relies on fewer dependencies, and only the appearance-related plugins are kept.

I've also improved on the visual design accessibility from the dark mode theme, experimenting with better whitespacing, adjusted the font sizes (again) and reducing contrast between the light and dark elements.

Overall, I'm quite happy of the UX experience this theme provides, as the behaviour and backend logic works consistently within Anki's framework.

## What's New?

- Subject / Note types are now colored labels that change depending on the subject studied. 
> JavaScript has a yellow label, HTML red, CSS blue and so-on. The default is gray to represent an unknown type.
> For a good UX, I've added some unused colors, a standard color list for common web development programming languages and encapsulated the code so it's easy to put your own color if it's not there.

- Type Auto-Correct
> If you're like me and don't feel like spelling Javascript or Typescript correctly (correct being: JavaScript/TypeScript), there is a built-in autocorrector. Feel free to add your own autocorrect code.

- New custom tooltips on hover on card review
> I've adjusted the theme to work with Tippy Tooltips or [kleinerpirat's Anki Tooltip](https://github.com/kleinerpirat/anki-tooltips) add-on to match the "inspect" interaction from Animal Crossing.

- All Buttons have custom tooltips
> Tooltips show the shortcut for the buttons (Anki defaults). This can be disabled / enabled within the CSS file.

- New Hint Indicator
> Distraction-free hint indicator that automatically shows you the hint block.

- Comprehensive timer logic
> After 30 seconds (or 1/2 of your timer), the hint block pops up and asks if you need help.
> Note: it does not reveal to you the hint itself, as that's a user decision

- New Code Block & Syntax Blocks
> These have been simplified to reduce vertical space and clutter, without relying on an external header tag.

- New CSS animations for flashcard front-back transitions
> Some elements have pop-in animations to stagger the clunky DOM reload from Anki.

## More about the timer logic...

Anki uses the same webpage to unload and load in new contents (flashcards) into the DOM. Since the hint block's timed appearance only applies to the programming type cards- having other different flashcards appear in-between programming type cards within the same HTML document was an issue, as that meant the timer carried over to the next time the programming type card shows up. 

The hint block would show up earlier than expected, because the old timer function would execute from the same webpage. The new card's timer would still take effect, but produce nothing as a result because the original timer's effect has already produced the desired effect.

To solve this, the timer obviously needed to be reset on every script load, or every time a new flashcard (of the same type) loads in. Though, in practice, it wasn't that simple, as Anki sometimes has inconsistent rendering cycles, because of the way flashcards are loaded into the same webpage.

To make sure it's _always_ loaded in at the right times, I added a simple check to see if the document's ready state was complete, if not, add an event handler attached to the global window object to check if the page is entirely loaded, then synchronise the function execution at the next browser painting step.

## Future Improvements

Using `async` and `await` could be a good way to refactor, but it's not worth the bug testing because of the way Anki works. I'm satisfied with how robust and performant the code is at the moment.

I could also rewrite this so more OOP principles are followed and make use of the `static` keyword to make helper methods, etc.

For this project, functional programming sufficed and does the job.

## What's left to be done?
~Since this is mostly based on the Dark Mode theme— I'm currently working on porting over the custom card types to the new visual design.~ 
✅ All done!

In the future, I'd like to develop an add-on that allows you to switch the entire UI design on the fly. The [Anki Re-design](https://ankiweb.net/shared/info/308574457) add-on is a good start, but I'll have to look into how modular and customisable it is developing it.
