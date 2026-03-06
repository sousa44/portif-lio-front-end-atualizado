// projetos

const projetos = [
    { title: 'CineFlix', img: 'cineFilx-img.png', link: 'https://sousa44.github.io/CineFlix/' },
    { title: 'Delicius Delivery', img: 'deliciusDelivery-img.png', link: 'https://sousa44.github.io/Delicious-Delivery/' },
    { title: 'Formulário inteligente', img: 'formularioInteligente-img.png', link: 'https://sousa44.github.io/Formul-rio-inteligente/' },
    { title: 'Controle de medicamentos', img: 'controleMedicamentos-img.png', link: 'https://sousa44.github.io/Controle-simples-de-medicamentos/' },
    { title: 'Cursos online', img: 'cursosOnline-img.png', link: 'https://sousa44.github.io/Projeto-Cursos-online/' },
    { title: 'Sorteio de nomes', img: 'sorteioNomes3.png', link: 'https://sousa44.github.io/sorteio-de-nomes/' },
    { title: 'Delicias do Sabor', img: 'deliciasDoSabor-img.png', link: 'https://sousa44.github.io/Delicias-do-Sabor/' },
    { title: 'Suas Vendas', img: 'projetoVendas-img.png', link: 'https://sousa44.github.io/projetoVendas/' }

]

// elementos dom
document.documentElement.style.boxSizing = "border-box"

const containerProjetos = document.querySelector(".main-projetos__items")

const exibirProjetos = () => {

    if (projetos.length === 0) return

    projetos.forEach((item) => {

        const div = document.createElement("div")
        const img = document.createElement("img")
        const h5 = document.createElement("h5")
        const a = document.createElement("a")

        // Conteúdo
        img.src = item.img
        h5.textContent = item.title
        a.textContent = "Ver projeto"
        a.href = item.link
        a.target = "_blank"

        // Classes
        div.classList.add("card", "border", "border-secondary", "text-center", "p-3", 'mt-5', 'shadow-lg')
        img.classList.add("card-img-top", "img-fluid")
        h5.classList.add('p-3')
        a.classList.add("w-50", "btn", "btn-dark", "p-2", "text-light")


        div.style.color = "#191970"
        div.style.width = "330px"




        // Montagem
        div.appendChild(img)
        div.appendChild(h5)
        div.appendChild(a)
        containerProjetos.appendChild(div)
    })
}

exibirProjetos()

// ajustar tela

const navItems = document.querySelectorAll("#nav-top li a")

const ajustarTela = (atributoLink) => {

    switch (atributoLink) {

        case 'contato':

            window.scrollTo({
                top: 900,
                behavior: "smooth"
            })

            break;

        case 'sobreMim':

            window.scrollTo({
                top: 900,
                behavior: "smooth"
            })

            break

        case 'projetos':

            window.scrollTo({
                top: 500,
                behavior: "smooth"
            })

            break



    }


}

navItems.forEach((link) => {

    const atributo = link.getAttribute("data-link")

    if (atributo) {

        link.addEventListener("click", () => {
            ajustarTela(atributo)
        })

    }


})