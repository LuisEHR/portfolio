const theme_btn = document.querySelector('#theme_btn')
const theme_btn_mobile = document.querySelector('#theme_btn_mobile')

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    theme_btn.click()
    theme_btn_mobile.click()
} else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}

function changeTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
}

theme_btn.addEventListener('click', () => {
    changeTheme()
})

theme_btn_mobile.addEventListener('click', () => {
    changeTheme()
})

/*
localStorage.removeItem('theme')
*/