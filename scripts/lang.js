const lang = {
    name: "",
    link: "",
    button: ""
}

switch(navigator.language) {
    case "pt-BR":
        lang.name = "Um nome para o link";
        lang.link = "Seu link";
        lang.button = "Encurtar";
        break;
    case "en":
        lang.name = "A name for the link";
        lang.link = "Your link";
        lang.button = "Shorten";
        break;
    case "es":
        lang.name = "Un nombre para el enlace";
        lang.link = "Tu enlace";
        lang.button = "Acortar";
        break;
    case "fr":
        lang.name = "Un nom pour le lien";
        lang.link = "Votre lien";
        lang.button = "Raccourcir";
        break;   
    default:
        // Defina um padrão ou fallback aqui, se necessário
        lang.name = "A name for the link";
        lang.link = "Your link";
        lang.button = "Shorten";
        break;
}


document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('name').placeholder = lang.name
    document.getElementById('content').placeholder = lang.link
    document.getElementById('button').textContent = lang.button
})
