(function() {
    document.addEventListener('DOMContentLoaded', () => {
        const style = getComputedStyle(document.documentElement) // Initial custom property values are obtained via computedStyles
        const themeOption = document.querySelectorAll('[name="themeOption"]')
        const fontSizeInput = document.getElementById('fontSizeInput')

        selectTheme = ({target: {value}}) => {
            const themePrimary = style.getPropertyValue(`--${value}-primary`).trim()
            const themeSecondary = style.getPropertyValue(`--${value}-secondary`).trim()

            document.documentElement.style.setProperty('--primary', themePrimary)
            document.documentElement.style.setProperty('--secondary', themeSecondary)
        }

        themeOption.forEach(option => {
            option.addEventListener('click', selectTheme)
        })

        fontSizeInput.addEventListener('input', ({target: {value}}) => {
            document.documentElement.style.fontSize = `${value}px`
        })
    });
})()