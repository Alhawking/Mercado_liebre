const btnIngresar = document.querySelector('#ingresar');
const btnVerPassword = document.querySelector('.contraseña button');
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