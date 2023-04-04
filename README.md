# anki-animal-crossing-theme

![anki_AC_UI](https://user-images.githubusercontent.com/116316499/229890969-2a8458a4-3f70-4a77-8e5a-cdddbd9d2619.png)

A work in progress.

## About
I was inspired by the UI design from Animal Crossing, so I decided to make something similar for Anki.
Considering I have a dark mode theme of Anki, this theme caters for the Light Mode users.

This theme is sort of a branch from the original Dark Mode, but it features a new rewrite of the code, making it much easier to read and manage for future additions.

Unlike the minimalist mode, this relies on fewer dependencies, and only the appearance-related plugins are kept.

I've also improved on the visual design accessibility from the dark mode theme, experimenting with better whitespacing, adjusted the font sizes (again) and reducing contrast between the light and dark elements.

## What's New?

- Subject / Note types are now colored labels that change depending on the subject studied. 
> JavaScript has a yellow label, HTML red, CSS blue and so-on. The default is gray to represent an unknown type.

- New custom tooltips on hover on card review
> I've adjusted the theme to work with Tippy Tooltips or [kleinerpirat's Anki Tooltip](https://github.com/kleinerpirat/anki-tooltips) add-on to match the "inspect" interaction from Animal Crossing.

- Buttons have custom tooltips
> This can be disabled / enabled within the CSS file.

## What's left to be done?
Since this is mostly based on the Dark Mode theme— I'm currently working on porting over the custom card types to the new visual design.

In the future, I'd like to develop an add-on that allows you to switch the entire UI design on the fly. The [Anki Re-design](https://ankiweb.net/shared/info/308574457) add-on is a good start, but I'll have to look into how modular and customisable it is developing it.
