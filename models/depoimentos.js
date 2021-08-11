const depoimentos = [
    {
        autor: "Wendel",
        titulo: "Depoimento Fake",
        descricao: "Mussum impsum cacilds",
    },
    {
        autor: "Vinicius",
        titulo: "Depoimento Fake II",
        descricao: "Mussum impsum cacilds",
    },
    {
        autor: "Mario",
        titulo: "Depoimento Fake III",
        descricao: "Mussum impsum cacilds",
    },
]

function cadastrarDepoimento(autor, titulo, descricao){
    return depoimentos.push({
        autor,
        titulo,
        descricao
    })
}

module.exports = {depoimentos, cadastrarDepoimento};