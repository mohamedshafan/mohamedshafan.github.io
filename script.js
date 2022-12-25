const root = document.querySelector(':root')

const themeBtn =  document.querySelector('#theme-switcher-btn');
    
themeBtn.addEventListener('click', ()=>{
    const mode = themeBtn.getAttribute('data-color')

    root.style.setProperty('--mainTextColor', `var(--mainTextColor-${mode})`);
    root.style.setProperty('--secondaryTextColor', `var(--secondaryTextColor-${mode})`);
    root.style.setProperty('--mainLinkColor', `var(--mainLinkColor-${mode})`);
    root.style.setProperty('--mainBorderColor', `var(--mainBorderColor-${mode})`);
    root.style.setProperty('--mainBgColor', `var(--mainBgColor-${mode})`);
    root.style.setProperty('--secondaryBgColor', `var(--secondaryBgColor-${mode})`);

    if(mode === 'dark'){
        themeBtn.setAttribute('data-color','light');
        themeBtn.innerHTML = 'light_mode';
    }else{
        themeBtn.setAttribute('data-color','dark');
        themeBtn.innerHTML = 'dark_mode';
    }
})