const express = require('express')
const { response } = require('express')
const { uuid } = require('uuidv4')//id unico


const app = express()
app.use(express.json())
const Autores = []
const HQs = []
const Editora = []



//---------------------------------------Autores---------------------------------------------//

app.get('/Autores', (request, response) => {
    return response.json(Autores)
})//Visualizar
app.post('/Autores', (request, response) => {
    const { nome, livro, gênero } = request.body
    const especificacao = { id: uuid(), nome, livro, gênero  }
    Autores.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/Autores/:id', (request, response) => {
    const { id } = request.params
    const { nome, livro, gênero  } = request.body
    const newAutores = { id, nome, livro, gênero }
    const especificacaoindex = Autores.findIndex(especificacao => especificacao.id == id)
    Autores[especificacaoindex] = newAutores;
    return response.json(newAutores)
})
//delete apaga
app.delete('/Autores/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = Autores.findIndex(especificacao => especificacao.id == id)
    Autores.splice(especificacaoindex, 1)
    return response.status(204).send()
})

///------------------HQ-----------------------------------//

app.get('/HQs', (request, response) => {
    return response.json(HQs)
})//Visualizar
app.post('/HQs', (request, response) => {
    const { mangá, autor } = request.body
    const especificacao = { id: uuid(), mangá, autor }
    HQs.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/HQs/:id', (request, response) => {
    const { id } = request.params
    const { mangá, autor } = request.body
    const newHQs = { id, mangá, autor }
    const especificacaoindex = HQs.findIndex(especificacao => especificacao.id == id)
    HQs[especificacaoindex] = newHQs;
    return response.json(newHQs)
})
//delete apaga
app.delete('/HQs/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = HQs.findIndex(especificacao => especificacao.id == id)
    HQs.splice(especificacaoindex, 1)
    return response.status(204).send()
})

//----------------------------------------------------Editoras--------------------//

app.get('/Editora', (request, response) => {
    return response.json(Editora)
})//Visualizar
app.post('/Editora', (request, response) => {
    const {editora, endereço } = request.body
    const especificacao = { id: uuid(), editora, endereço }
    Editora.push(especificacao)
    return response.status(201).json(especificacao)

})//inserir
//put atualiza
app.put('/Editora/:id', (request, response) => {
    const { id } = request.params
    const {editora, endereço } = request.body
    const newEditora = { id, editora, endereço}
    const especificacaoindex = Editora.findIndex(especificacao => especificacao.id == id)
    Editora[especificacaoindex] = newEditora;
    return response.json(newEditora)
})
//delete apaga
app.delete('/Editora/:id', (request, response) => {
    const { id } = request.params
    const especificacaoindex = notebooks.findIndex(especificacao => especificacao.id == id)
    Editora.splice(especificacaoindex, 1)
    return response.status(204).send()
})

app.listen(8181, () => {
    console.log('O Servidor foi iniciado!')
})
