// CODIGO ERRADO
app.post('/users/create', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users/getAll', (req, res) => {
    res.status(200).json(users);
}); 


// C) CODIGO CORRIGIDO:
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.status(200).json(users);
}); 

// A) As rotas URIs devem refletir ao recurso e nao a função da API,
// tambem deve ser facil de ser manipulada podendo ser usado uma implementação
// de 'id' em suas rotas futuramente,facilitando a manipulação.

// B) Devemos remover o 'create' e o 'getAll' das UIs para facilitar a utilizacao da APIR