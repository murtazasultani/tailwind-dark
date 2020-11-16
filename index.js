const plugin = require('tailwindcss/plugin')
const selectorParser = require('postcss-selector-parser');

module.exports = function({ addVariant, prefix }) {
    addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
            return selectorParser((selectors) => {
                selectors.walkClasses((sel) =>{
                    sel.value = `dark${separator}${sel.value}`
                    sel.parent.insertBefore(sel, selectorParser().astSync(prefix('.theme-dark ')))
                })
            }).processSync(selector)
        })
    })
}