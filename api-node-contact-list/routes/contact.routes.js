const express = require ('express')
const router = express.Router()

const Contact = require('../models/contact.model')

// ==========================================
// Obter todos os contatos
// ==========================================
router.get('/', (_req, res) => {

	Contact.find({},'name email phone')
    .then(contatos => res.status(200).json( contatos ))
    .catch( e => res.status(500).send({ msgErrors: e.message }) )
})



// ==========================================
// Obter contato pelo Id
// ==========================================
router.get('/:_id', (req, res) => {
    let id = req.params._id;
    Contact.findById(id)
    .then(contato => res.status(200).json(contato))
    .catch(err => res.status(404).json({erros: err }))
})     



// ==========================================
// Atualizar contato
// ==========================================
router.put('/:id', (req, res) => {

    var id = req.params.id
    var body = req.body

    Contact.findById(id, (err, contact) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensagem: 'Erro ao buscar um contato',
                errors: err
            })
        }
        if (!contact) {
            return res.status(400).json({
                ok: false,
                mensagem: 'O contato com o id: ' + id + ' não existe',
                errors: { message: `Não existe um contato com o ID: ${id}`}
            })
        }
        contact.name = body.name
        contact.email = body.email
        contact.phone = body.phone

        contact.save((err, contactSaved) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensagem: 'Error ao atualizar contato',
                    errors: err
                })
            }
            res.status(200).json({
                ok: true,
                contact: contactSaved
            })

        })

    })

})

// ==========================================
// Criar um contato
// ==========================================
router.post('/', (req, res) => {

    let body = req.body

    let contact = new Contact({
        name: body.name,
        email: body.email,
        phone: body.phone
    })
    contact.save((err, contactSaved) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensagem: 'Erro ao criar o contato',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            contact: contactSaved
        })

    })

})

// ============================================
//   Deletar/Excluir um contato pelo seu id
// ============================================
router.delete('/:id',(req, res) => {

    let id = req.params.id

    Contact.findByIdAndRemove(id, (err, contactRemoved) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensagem: `Erro ao excluir o contato de ID: ${id}`,
                erros: err
            })
        }
        if (!contactRemoved) {
            return res.status(400).json({
                ok: false,
                mensagem: `Não existe um contato com ID: ${id}`,
                erros: { message: `Não existe um contato com ID: ${id}` }
            })
        }
        res.status(200).json({
            ok: true,
            contact: contactRemoved
        })

    })
})


module.exports = router