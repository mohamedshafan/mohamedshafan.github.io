const root = document.querySelector(':root')
    let rootStyles = getComputedStyle(root);

    const mainTextColor_light=rootStyles.getPropertyValue('--mainTextColor-light');
    const secondaryTextColor_light=rootStyles.getPropertyValue('--secondaryTextColor-light');
    const mainLinkColor_light=rootStyles.getPropertyValue('--mainLinkColor-light');
    const mainBorderColor_light=rootStyles.getPropertyValue('--mainBorderColor-light');
    const mainBgColor_light=rootStyles.getPropertyValue('--mainBgColor-light');
    const secondaryBgColor_light=rootStyles.getPropertyValue('--secondaryBgColor-light');

    const mainTextColor_dark=rootStyles.getPropertyValue('--mainTextColor-dark');
    const secondaryTextColor_dark=rootStyles.getPropertyValue('--secondaryTextColor-dark');
    const mainLinkColor_dark=rootStyles.getPropertyValue('--mainLinkColor-dark');
    const mainBorderColor_dark=rootStyles.getPropertyValue('--mainBorderColor-dark');
    const mainBgColor_dark=rootStyles.getPropertyValue('--mainBgColor-dark');
    const secondaryBgColor_dark=rootStyles.getPropertyValue('--secondaryBgColor-dark');

    let themeBtn =  document.querySelector('#theme-switcher-btn');
    
    themeBtn.addEventListener('click', ()=>{
        let currentTheme = themeBtn.getAttribute('data-color');

        if(currentTheme==='dark'){
            root.style.setProperty('--mainTextColor', mainTextColor_light);
            root.style.setProperty('--secondaryTextColor', secondaryTextColor_light);
            root.style.setProperty('--mainLinkColor', mainLinkColor_light);
            root.style.setProperty('--mainBorderColor', mainBorderColor_light);
            root.style.setProperty('--mainBgColor', mainBgColor_light);
            root.style.setProperty('--secondaryBgColor', secondaryBgColor_light);

            themeBtn.setAttribute('data-color','light');
            themeBtn.innerHTML = 'dark_mode';
        }

        if(currentTheme==='light'){
            root.style.setProperty('--mainTextColor', mainTextColor_dark);
            root.style.setProperty('--secondaryTextColor', secondaryTextColor_dark);
            root.style.setProperty('--mainLinkColor', mainLinkColor_dark);
            root.style.setProperty('--mainBorderColor', mainBorderColor_dark);
            root.style.setProperty('--mainBgColor', mainBgColor_dark);
            root.style.setProperty('--secondaryBgColor', secondaryBgColor_dark);

            themeBtn.setAttribute('data-color','dark');
            themeBtn.innerHTML = 'light_mode';
        }
    })