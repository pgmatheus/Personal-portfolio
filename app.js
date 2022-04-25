const sections = document.querySelectorAll('.sessions')
const control = document.querySelectorAll('.control')

function pageTransitions(){
    for (let i = 0; i < control.length; i++){
        control[i].addEventListener('click',function(){
            const actBtn = document.querySelectorAll('.active-btn');
            const actsec = document.querySelectorAll('.active');
            actBtn[0].className = actBtn[0].className.replace('active-btn','');
            control[i].className += ' active-btn';
            actsec[0].className = actsec[0].className.replace('active','');
            sections[i].className += ' active';
        })
    }

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', function(){
        let element = document.body;
        element.classList.toggle('lightMode');
    })


}

pageTransitions()