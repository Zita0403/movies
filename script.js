// let movies = [
//     {
//         title: "Csillagok között",
//         originalTitle: "Interstellar",
//         writer: "Jonathan Nolan, Christopher Nolan",
//         director: "Christopher Nolan",
//         publication: "2014",
//         genre: "Sci-fi, Kaland, Dráma",
//         ageLimit: 12
//     },
//     {
//         title: "A vándorló palota",
//         originalTitle: "Howl's Moving Castle",
//         writer: "Diana Wynne Jones",
//         director: "Hayao Miyazaki",
//         publication: "2005",
//         genre: "Családi, Kaland, Fantasy, Animáció",
//         ageLimit: 6
//     },
//     {
//         title: "Holnapután",
//         originalTitle: "The Day After Tomorrow",
//         writer: "Roland Emmerich, Jeffrey Nachmanoff",
//         director: "Roland Emmerich",
//         publication: "2004",
//         genre: "Sci-fi, Kaland, Akció, Katasztrófa, Thriller",
//         ageLimit: 12
//     },
//     {
//         title: "Aljas nyolcas",
//         originalTitle: "The Hateful Eight",
//         writer: "Quentin Tarantino",
//         director: "Quentin Tarantino",
//         publication: "2016",
//         genre: "Western, Misztikus, Krimi, Thriller",
//         ageLimit: 18
//     },
// ]


$( "#tabs" ).tabs();

$(document).ready(function() {
    $("div.plus-info").hide();
    $("div.movie-info h2").on("click", function() {
        $(this).closest("div.movie-info").find("div.plus-info").fadeToggle();
    });
});