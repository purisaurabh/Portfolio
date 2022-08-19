let header = document.querySelector('header');
let menu = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>
{
    navbar.classList.toggle('active');
}

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>
{
    if(darkmode.classList.contains('bx-moon'))
    {
        darkmode.classList.replace('bx-moon' , 'bx-sun');
        document.body.classList.add('active');
    }

    else
    {
        darkmode.classList.replace('bx-sun' , 'bx-moon');
        document.body.classList.remove('active');
    }
}