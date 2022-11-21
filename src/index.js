const express = require('express')
const {response} = require('express')
const {uuid} = require('uuidv4')//id unico


const app = express()
app.use(express.json())
const Autores = [ ]

app.get('/Autores',(request, response) =>{
    return response.json(Autores)
})//visualizar


app.post('/Autores', (request, response) => {
    const {nome, livro, gênero} = request.body
    const autor = {id:uuid (), nome, livro, gênero}
    Autores.push(autor)
    return response.status(201).json(autor)
})//adicionar


app.put('/Autores/:id', (request, response) => {
    const { id } = request.params
    const { nome, livro, gênero } = request.body
    const newAutores = { id, nome, livro, gênero }
    const autorindex = Autores.findIndex(autor => autor.id == id)
    Autores[autorindex] = newAutores;
    return response.json(newAutores)
})//atualizar


app.delete('/Autores/:id', (request, response) => {
    const { id } = request.params
    const autorindex = autor.findIndex(autor => autor.id == id)
    Autores.splice(autorindex, 1)
    return response.status(204).send()
})//deletar
/////////////////////////////////////


//hq's e mangas


const Manga = [   {
    "id":1,
    "Mangá":"JUJUTSU KAISEN  BATALHA DE FEITICEIROS  VOL 01",
    "Autor":"Gege Akutami"
    

}]

app.get('/Manga',(request, response) =>{
    return response.json(Manga)
})//visualizar


app.post('/Manga', (request, response) => {
    const {nome, livro, gênero} = request.body
    const mangas = { nome, livro, gênero}
    Manga.push(mangas)
    return response.status(201).json(mangas)
})//adicionar


app.put('/Manga/:id', (request, response) => {
    const { id } = request.params
    const { manga, autor } = request.body
    const newManga = { id, manga, autor }
    const mangasindex = Manga.findIndex(mangas => mangas.id == id)
    Manga[mangasindex] = newManga;
    return response.json(newManga)
})//atualizar


app.delete('/Manga/:id', (request, response) => {
    const { id } = request.params
    const mangasindex = mangas.findIndex(mangas => mangas.id == id)
    Manga.splice(mangasindex, 1)
    return response.status(204).send()
})//deletar

///////////////


// editoras
const Editora = []

app.get('/Editora',(request, response) =>{
    return response.json(Editora)
})//visualizar


app.post('/Editora', (request, response) => {
    const {nome, livro, gênero} = request.body
    const editoras = { nome, livro, gênero}
    Editora.push(editoras)
    return response.status(201).json(editoras)
})//adicionar


app.put('/Editora/:id', (request, response) => {
    const { id } = request.params
    const { nome, livro, gênero } = request.body
    const newEditora = { nome, livro, gênero }
    const editorasindex = Editora.findIndex(editoras => editoras.id == id)
    Editora[editorasindex] = newEditora;
    return response.json(newEditora)
})//atualizar


app.delete('/Editora/:id', (request, response) => {
    const { id } = request.params
    const editorasindex = editoras.findIndex(editoras => editoras.id == id)
    Editora.splice(editorasindex, 1)
    return response.status(204).send()
})//deletar


app.listen(8181, () =>{
    console.log('o servidor foi iniciado')
})