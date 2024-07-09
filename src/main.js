function updateTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('mocha')
      } else {
        document.documentElement.classList.remove('mocha')
      }
    }

if (!('theme' in localStorage)) {
    const checkIsDarkSchemePreferred = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    if(checkIsDarkSchemePreferred) {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }
}

function themeSwitch() {
    if(localStorage.theme == 'dark') {
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }
    updateTheme();
}

