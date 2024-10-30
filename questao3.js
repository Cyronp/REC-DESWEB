// CODIGO ERRADO
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = req.body.name;
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});
// B)CODIGO CORRIGIDO
app.patch('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        (req.body.name); user.name = req.body.name;
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// A) Ao utilizar o PUT, todas as informacoes do usuario sera modificada
// complicando a utilização em muitas aplicações. Diferente do PATCH, onde
// o PATCH apenas modifica a area fornecida pelo usuario.