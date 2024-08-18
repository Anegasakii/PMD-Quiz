let allStarters = {
    EOTD: {
        Bulbasaur: "Lonely / Docile",
        Charmander: "Docile / Brave",
        Squirtle: "Quirky / Bold",
        Pikachu: "Brave / Hasty",
        Meowth: "Sassy / Relaxed",
        Chikorita: "Calm / Quiet",
        Cyndaquil: "Timid / Calm",
        Totodile: "Jolly / Sassy",
        Treecko: "Quiet / Hardy",
        Torchic: "Hardy / Rash",
        Mudkip: "Rash / Lonely",
        Skitty: "Hasty / Naive",
        Turtwig: "Bold / Timid",
        Chimchar: "Naive / Impish",
        Piplup: "Impish / Quirky",
        Munchlax: "Relaxed / Jolly"
    },
    EOS: {
        Bulbasaur: "Lonely / Docile",
        Charmander: "Docile / Brave",
        Squirtle: "Quirky / Bold",
        Pikachu: "Brave / Hasty",
        Vulpix: "—— / Relaxed",
        Eevee: "—— / Jolly",
        Chikorita: "Calm / Quiet",
        Cyndaquil: "Timid / Calm",
        Totodile: "Jolly / Sassy",
        Phanpy: "Relaxed / ——",
        Treecko: "Quiet / Hardy",
        Torchic: "Hardy / Rash",
        Mudkip: "Rash / Lonely",
        Skitty: "—— / Naive",
        Turtwig: "Bold / Timid",
        Chimchar: "Naive / Impish",
        Piplup: "Impish / Quirky",
        Shinx: "Hasty / ——",
        Riolu: "Sassy / ——"
    }
}

function updateStarters(game) {
    let starterList = document.getElementById("starterList")
    content = ""
    for (i in allStarters[game]) {
        content += `<tr>\n<td>${i}</td>\n<td>${allStarters[game][i]}</td>\n</tr>\n`
    }
    starterList.innerHTML = content;
}

updateStarters("EOTD");