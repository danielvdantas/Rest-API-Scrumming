const express = require('express');
const router = express.Router();

// CONSULTA TODOS OS USUARIOS
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota do usuários'
    });
});

// INSERE UM USUÁRIO
router.post('/', (req, res, next) => {
    const usuario = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        userLogin: req.body.userLogin,
        userPass: req.body.userPass
    }
    res.status(200).send({
        mensagem: 'Usando o POST dentro da rota do usuário',
        usuarioCriado: usuario
    });
});

// BUSCA UM USUÁRIO PELO EMAIL
router.get('/:userEmail', (req, res, next) => {
    const userEmail = req.params.userEmail;

    if (userEmail === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            userEmail: userEmail
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
        });
    }

});

// BUSCA UM USUÁRIO PELO NOME
router.get('/:userName', (req, res, next) => {
    const userName = req.params.userName;

    if (userName === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o Nome especial',
            userName: userName
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um nome',
        });
    }
});

module.exports = router;