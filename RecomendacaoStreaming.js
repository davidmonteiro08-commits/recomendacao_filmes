formulario = document.getElementById("form-recomendacao");
inputIdade = document.getElementById("input-idade");
inputGenero = document.getElementById("input-genero");
inputHorario = document.getElementById("input-horario");
pRecomendacao = document.getElementById("p-recomendacao");
pMotivo = document.getElementById("p-motivo");
pStreaming = document.getElementById("p-streaming");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let idade = parseInt(inputIdade.value);
    let genero = parseInt(inputGenero.value);
    let horario = parseInt(inputHorario.value);

    if (idade >= 1 && idade <= 12) {
        pRecomendacao.innerHTML = "Filme: Super Mario Bros.";
        pMotivo.innerHTML = "Motivo: Esse filme é um dos recomendados para sua faixa etária";
        pStreaming.innerHTML = "Disponível em: Netflix, Google Play Filmes, Apple Tv,Claro Tv, Amazon Prime Video";
    } else if (idade >= 13 && idade <= 17 && genero === 1 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: O Espetacular Homem-Aranha";
        pMotivo.innerHTML = "Motivo: Filme de ação de herói ótimo para a manhã";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Claro Video, Google Play Filmes, Claro Tv+, Max, Apple Tv";
    } else if(idade >= 13 && idade <= 17 && genero === 1 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: Jumanji: Bem-vindo a Selva";
        pMotivo.innerHTML = "Motivo: Filme de ação engraçado para a tarde";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Google Play Filmes, Apple Tv, Globoplay, Claro Video "
    } else if (idade >= 13 && idade <= 17 && genero === 1 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: Jogos Vorazes";
        pMotivo.innerHTML = "Motivo: Ação frenética para a noite";
        pStreaming.innerHTML = "Disponível em: Apple Tv, Netflix, Amazon Prime Video, Telecine, Youtube Filmes (aluguel)"
    } else if (idade >= 13 && idade <= 17 && genero === 2 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: Meninas Malvadas";
        pMotivo.innerHTML = "Motivo: Comédia para a manhã";
        pStreaming.innerHTML = "Disponível em: Netflix, Paramount+, Amazon Prime Video"
    } else if (idade >= 13 && idade <= 17 && genero === 2 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: Uma Sexta-feira Muito Louca";
        pMotivo.innerHTML = "Motivo: Comédia adolescente clássica da Sessão da Tarde";
        pStreaming.innerHTML = "Disponível em: Disnep+, Amazon Prime Video, Apple Tv";
    } else if (idade >= 13 && idade <= 17 && genero === 2 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: Curtindo a Vida Adoidado";
        pMotivo.innerHTML = "Motivo: Comédia clássica para a noite";
        pStreaming.innerHTML = "Disponível em: Paramount+, Telecine, Netflix, Max, Star+, Apple Tv "
    } else if (idade >= 13 && idade <= 17 && genero === 3 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: A Vida Depois";
        pMotivo.innerHTML = "Motivo: Drama para a manhã";
        pStreaming.innerHTML = "Disponível em: Max, Google Play Filmes, Apple Tv, Amazon Prime Video";
    } else if (idade >= 13 && idade <= 17 && genero === 3 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: A Culpa é das Estrelas";
        pMotivo.innerHTML = "Motivo: Drama com pitadas de romance,excelente para a tarde";
        pStreaming.innerHTML = "Disponível em: Disnep+, Claro Tv+, Amazon Prime Video";
    } else if (idade >= 13 && idade <= 17 && genero === 3 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: Por Lugares Incríveis";
        pMotivo.innerHTML = "Motivo: Drama para a noite";
        pStreaming.innerHTML = "Disponível em: Netflix";
    } else if (idade >= 18 && idade <= 59 && genero === 1 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: Velozes e Furiosos 7";
        pMotivo.innerHTML = "Motivo: Ação leve para a manhã";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Netflix, Globoplay, Max, Claro Video, Apple Tv, Google Play Filmes";
    } else if (idade >= 18 && idade <= 59 && genero === 1 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: Jhon Wick";
        pMotivo.innerHTML = "Motivo: Ação intensa para a tarde";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Claro Tv+, Telecine, Max, Netflix, Apple Tv, Google Play Filmes";
    } else if (idade >= 18 && idade <= 59 && genero === 1 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: Missão Impossível";
        pMotivo.innerHTML = "Motivo: Ação épica para a noite";
        pStreaming.innerHTML = "Disponível em: Disnep+, Paramount+, Max, Star+, Telecine, Amazon Prime Video, Apple Tv";
    } else if (idade >= 18 && idade <= 59 && genero === 2 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: Se Beber,Não Case";
        pMotivo.innerHTML = "Motivo: Comédia leve para descontrair";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Max, Netflix";
    } else if (idade >= 18 && idade <= 59 && genero === 2 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: As Branquelas";
        pMotivo.innerHTML = "Motivo: Comédia clássica da Sessão da Tarde";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Google Play Filmes, Apple Tv, Max, Claro video";
    } else if (idade >= 18 && idade <= 59 && genero === 2 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: Superbad";
        pMotivo.innerHTML = "Motivo: Comédia adulta para a noite";
        pStreaming.innerHTML = "Disponível em: Apple Tv, Amazon Prime Video, Netflix, Claro video";
    } else if (idade >= 18 && idade <= 59 && genero === 3 && horario === 1) {
        pRecomendacao.innerHTML = "Filme: Forrest Gump";
        pMotivo.innerHTML = "Motivo: Drama inspirador";
        pStreaming.innerHTML = "Disponível em: Mercado Play, Amazon Prime Video, Paramount+, Netflix, Google Play Filmes, Apple Tv";
    } else if (idade >= 18 && idade <= 59 && genero === 3 && horario === 2) {
        pRecomendacao.innerHTML = "Filme: Cidadão Kane";
        pMotivo.innerHTML = "Motivo: Drama clássico";
        pStreaming.innerHTML = "Disponível em: Oldflix, Amazon Prime Video, Google Play Filmes";
    } else if (idade >= 18 && idade <= 59 && genero === 3 && horario === 3) {
        pRecomendacao.innerHTML = "Filme: O Poderoso Chefão";
        pMotivo.innerHTML = "Motivo: Drama intenso para a noite";
        pStreaming.innerHTML = "Disponível em: Amazon Prime Video, Mercado Play, Globoplay";
    } else if (idade >= 60 && (genero === 1 || genero === 2 || genero === 3) && ( horario === 1 || horario === 2 || horario === 3)) {
        pRecomendacao.innerHTML = "Série: The Crown";
        pMotivo.innerHTML = "Motivo: Recomendação especial para nossa experiência";
        pStreaming.innerHTML = "Disponível em: Netflix";
    }
})