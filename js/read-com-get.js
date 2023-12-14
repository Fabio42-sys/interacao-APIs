document.querySelector('#carregar').addEventListener('click', () => {

    fetch('https://ominous-palm-tree-69g579x956pg25x99-3000.app.github.dev/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(Response => Response.json())
    .then(Response => {
        Response.forEach(produto => {
            document.querySelector('#produtos').innerHTML += `<ul><li>ID: ${produto.id}</li><li>Nome: ${produto.nome}</li></ul>`;
        });
    })

})