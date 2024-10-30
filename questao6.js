// CODIGO ERRADO
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});
//B) CODIGO CORRIGIDO
app.post('/users', (req, res) => {
    const {name} = req.body
    if (!name || typeof name !== 'string' || name.length <= 3){
        res.status(400).json({ error: 'Nome do usuario deve conter no minimo 3 caracteres' });
    } else {
        const newUser = { id: users.length + 1, ...req.body };
        users.push(newUser);
        res.status(201).json(newUser)};
});

// A) É muito importante uma validação nos campos, pois assim podemos
// previnir entradas vazias, ou até mesmo que nao correspondem com o
// tamanho de string que desejamos. Um bom exemplo de recurso que pode
// ser usado a validação é o CPF.