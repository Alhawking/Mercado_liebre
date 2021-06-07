const btnIngresar = document.querySelector('#ingresar');
const btnRegistro = document.querySelector('#registro');
const btnVerPassword = document.querySelector('.contraseña button');
const menuMobile = document.querySelector('.menu-mobile');
menuMobile.onclick = () => {
    if (document.querySelector('.header-section2').classList.contains('menu-mobile-display')) {
        document.querySelector('.header-section2').classList.remove('menu-mobile-display');
    } else {
        document.querySelector('.header-section2').classList.add('menu-mobile-display');
    }
}
if (btnIngresar) {
    btnIngresar.onclick = e => {
        e.preventDefault();
        window.location.href = "/"
    }
}
if (btnVerPassword) {
    btnVerPassword.onclick = e => {
        e.preventDefault();
        const input = document.querySelector('.contraseña input');
        if (input.type == "text") {
            input.type = "password";
            btnVerPassword.removeChild(btnVerPassword.firstChild);
            btnVerPassword.innerHTML = `
        <i class="far fa-eye"></i>
        `
        } else {
            input.type = "text";
            btnVerPassword.removeChild(btnVerPassword.firstChild);
            btnVerPassword.innerHTML = `
        <i class="far fa-eye-slash"></i>
        `
        }
    }
}
if (btnRegistro) {
    btnRegistro.onclick = e => {
        e.preventDefault();
        window.location.href = "/";
    }
}