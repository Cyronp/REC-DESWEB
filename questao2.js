// CODIGO ERRADO
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'Usuário excluído' });
    } else {
        res.json({ message: 'Usuário não encontrado' });
    }
});
// B) CODIGO CORRIGIDO
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({mensage: "Usuario removido!"});
    } else {
        res.status(404).json({mensage: "Usuario não foi encontrado"});
    }
});

// A) no codigo fornecido nao podemos encontar o uso de respostas com status
// sendo apenas enviado uma mensagem para o usuario, podendo assim complicar
// a comunicação entre o servidor e o usuario, podendo até mesmo ser dificil
// detectarmos possiveis erros e assim ser dificil a sua resolução
