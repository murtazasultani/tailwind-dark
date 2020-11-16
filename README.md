# Tailwind Dark
Tailwind CSS plugin to generate dark variant.

## Installation

```bash
npm install tailwind-dark
```

## usage
```js
plugins: [
    require('tailwind-dark'),
    // ...
],
```

## Note
By default the `dark` variant is not enabled to none of the tailwindcss utilities.
To use the `dark` variant add it at the end of any untility you want to use it with.
You can toogle dark using the class `theme-dark` at the most parent element of your component

```js
variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    // ...
},
```

This plugin generates the following utilities:

```css
.theme-dark .dark\:bg-white {
  --bg-opacity: 1;
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, var(--bg-opacity));
}

.theme-dark .dark\:bg-black {
  --bg-opacity: 1;
  background-color: #000000;
  background-color: rgba(0, 0, 0, var(--bg-opacity));
}
...
```

## Example

```html
<div>
    <div class="grid grid-cols-2 gap-10">
        <div class="h-60 bg-gray-100 dark:bg-gray-900">

        </div>
        <div class="h-60 bg-gray-900 dark:bg-gray-100">

        </div>
    </div>
</div>
```
<img src="./illustration/dark-mode.png" width="100%">

To active the dark mode use the `theme-dark` on the parent element of your component.

```html
<div class="theme-dark">
    <div class="grid grid-cols-2 gap-10">
        <div class="h-60 bg-gray-100 dark:bg-gray-900">

        </div>
        <div class="h-60 bg-gray-900 dark:bg-gray-100">

        </div>
    </div>
</div>
```
<img src="./illustration/default-mode.png" width="100%">

