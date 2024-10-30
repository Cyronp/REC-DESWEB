// CODIGO ERRADO
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});
// B)CODIGO CORRIGIDO 
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
});

// A) Adicionamos o parseInt a constante que pega o ID, para que assim nao
// seja uma string e sim um inteiro, assim a API sera utilizada corretamente.
