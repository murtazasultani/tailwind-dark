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

```js
variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    // ...
},
```

