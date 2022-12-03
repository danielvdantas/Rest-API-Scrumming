const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

// CONSULTA TODAS AS EMPRESAs
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota de empresas'
    });
});

// INSERE UMA EMPRESA
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        'INSERT INTO empresa (nome, is_ativo) VALUES (?, ?)',
            [
                req.body.nome,
                req.body.is_ativo
            ],
            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(201).send({
                    mensagem: 'Empresa inserida com sucesso!',
                    id_empresa: resultado.insertId
                });
            }
    })
});

// BUSCA UMA EMPRESA PELO ID
router.get('/:companyID', (req, res, next) => {
    const id = req.params.companyID;

    if (companyID === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            companyID: companyID
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID',
        });
    }

});

// BUSCA UMA EMPRESA PELO NOME
router.get('/:companyName', (req, res, next) => {
    const nome = req.params.companyName;

    if (companyName === 'especial') {
        res.status(200).send({
            mensagem: 'Você descobriu o Nome especial',
            companyName: companyName
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um nome',
        });
    }
});

// ALTERA UMA EMPRESA
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota Empresa'
    });
});

// EXCLUI UMA EMPRESA
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota Empresa'
    });
});

module.exports = router;