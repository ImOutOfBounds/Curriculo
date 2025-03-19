// Adicionar novos itens na aba de projetos
const projects = document.querySelector(".projects_section");


function loadProjects(data) {
    fetch('javaScript/data.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(element => {
            html += `
            <div class="project">
                <div class="project_details">
                    <img src="${element.image}">
                </div>
                <div class="project_description">
                    <div class="project_description_text">
                        <h1>${element.name}</h1>
                        <p>${element.description}</p>
                    </div>
                    <a href="${element.link}" target="_blank"><button type="button" >Acessar projeto</button></a>
                </div>
            </div>
            `;

        });
        projects.innerHTML = html;
    })
}


if (window.location.href == "http://localhost:3000/") {
    getProjects()
} else {
    loadProjects()
}
