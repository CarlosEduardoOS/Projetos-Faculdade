
function mostrarSenha(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.innerHTML = '<i class="fas fa-eye-slash" style="font-size: .8em;"></i>';
    } else {
        input.type = "password";
        icon.innerHTML = '<i class="fas fa-eye" style="font-size: .8em;"></i>';
    }
}