const term = document.querySelector(".side-0-content");
const definition = document.querySelector(".side-1-content");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

words = {
    "Melyik keleti cég ismert a megbizhatóságukról?": "Toyota",
    "Melyik cégről van elnevezve a Michelin star?": "Michelin",
    "Melyik superautókat gyártó cégnek van az logójában egy ló?": "Ferrari",
    "Hogy hívják más néven a Fokozatmentes automata váltót": "CVT-váltó",
    "Mikor használtak először safety cart a Forma–1-ben?": "1973-ban",
    "Melyik gumigyártó ikonikus figurája a Bibendum-baba?": "Michelin",
    "Hányszoros F1-világbajnok Michael Schumacher?": "hétszeres",
    "A felsorolt márkák közül melyik nem japán?(Falken;Hankook;Toyota)": "Hankook",
    "Használt személyautók esetén milyen időre szól Magyarországon a műszaki vizsga?": "2év",
    "Mikor készült el az első mercedes autó?": "1900. novemberében",
    "Hogy hívták a ferrari alapítóját?": "Enzo Ferrari",
    "Az aszfalt királyai film melyik két cég közötti rivalizációt mutatja be?": "Ford vs Ferrari",
    "Bíró László legismertebb találmánya egy golyóstoll, de autóipari találmánya is volt, amit a General Motors meg is vásárolt. Mi volt ez?": "automata váltó",
    "Hány spanyol nyert F1-világbajnoki címet?": "egy",
    "Miért van kígyó az Alfa-logóban?": "Mert a tervezőnek megtetszett a Visconti család címere.",
    "Ő volt a Volkswagen Bogár igazi feltalálója, nem Ferdinand Porsche, és ezt a bíróság is kimondta.": "Barényi Béla",
    "Milyen nemzetiségű versenyző nyerte az első Grand Prix-t, 1906-ban?": "magyar",
    "Mennyi idő múlva tért vissza a versenypályára Niki Lauda 1976-os balesete után?": "hat héttel",
    "Melyik a legmodernebb új Lada-modell az alábbiak közül?(Vesta,Granta,Kalina)": "Vesta"
}

data = Object.entries(words)

function nextcard() {
    randomTerm = data[Math.floor(Math.random() = data.lenght)]
    term.innerHTML = <h3>${randomTerm[0]}</h3>;
    definition.innerHTML = <h3>${randomTerm[1]}</h3>;
}

checkButton.addEventListener('click', function() {
    definition.stlye.dispaly = 'block';
});

nextButton.addEventListener('click', function() {
    nextcard();
});
