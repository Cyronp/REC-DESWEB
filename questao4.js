// CODIGO ERRADO
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});
// B)CODIGO CORRIGIDO
function gerarLink(item) {
    return {
        self: { href: `/users/${user.id}` },
        update: { href: `/users/${user.id}`, method: 'PUT' },
        delete: { href: `/users/${user.id}`, method: 'DELETE' },
        patch: { href: `/users/${user.id}`, method: 'PATCH' },
    };
}
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.status(200).json({
            ...user,
            links: gerarLink(user),
        });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

//A) O uso de HATEOAS é muito importante para o consumo do usuario,
// pois assim ele pode navegar pela URL sem saber sobre a API,
// por exemplo em uma aplicação de vendas, o usuario podera acessar
// certos items colocando seu ID ou nome, 'loja.com/produto/20'.