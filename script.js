let hidden = true;
function toggleEffectDisplay() {
    hidden = !hidden
    document.getElementById('cheat').classList.toggle('hide');
    for (item of document.getElementsByClassName('effect')) { item.classList.toggle('hidden'); }
    for (item of document.getElementsByClassName('block')) {item.classList.toggle('effectsHidden'); }
}
let natures = {
    Lonely: 0,
    Docile: 0,
    Quirky: 0,
    Brave: 0,
    Sassy: 0,
    Calm: 0,
    Timid: 0,
    Jolly: 0,
    Quiet: 0,
    Hardy: 0,
    Rash: 0,
    Hasty: 0,
    Bold: 0,
    Naive: 0,
    Impish: 0,
    Relaxed: 0
}

let chosenQ = [];
let mode = 'Sim';
let game = 'EOTD'

function build() {
    let container = document.getElementById("questions")
    container.innerHTML = `
	<th>Question</th>\n
	<th>Answer</th>\n
    <th>Effect</th>`;
    for (let i = 0; i < chosenQ.length; i++) {
        container.innerHTML += `<tr class="block" id="Q${i}"></tr>`;
        if(hidden) { document.getElementById(`Q${i}`).classList.add('effectsHidden'); }
    }
    for (let i = 0; i < chosenQ.length; i++){
        let block = document.getElementById(`Q${i}`)
        let currentQ = chosenQ[i];
        let text = `<td>
        <p>${currentQ.body}</p></td>
        <td onclick="update()">\n
        <div class="column">`;
        currentQ.pos = i;
        for (let j = 0; j < currentQ.answers.length; j++){
            text += `<div class="row">\n
            <label for="${currentQ.pos}${j}">${currentQ.answers[j]}</label> <input type="radio" id="${currentQ.pos}${j}" name="Q${i}" value="${j}">\n
            </div>`;
        }
        text += `</div>\n</td>\n
        <td class="effect`;
        if(hidden) { text += ` hidden`; }
        text += `">`;
        for (let j of currentQ.effects) {
            for (let k of j) {
                text += `${k[0]} +${k[1]}`;
                if(k != j[j.length-1]){ text += ', '}
            }
            text += "<br>"
        }
        text += `</td>
        </tr>`;
        block.innerHTML = text;
    }
}

function roll() {
    updateStarters(game);
    let questions = allQuestions[game];
    chosenQ = [];
    document.getElementById(mode).checked = true;
    switch (mode) {
        case "Sim":
            let dupes = Array();
            while (chosenQ.length < 8) {
                let rerolling = true;
                while (rerolling) {
                    let n = Math.floor(Math.random() * questions.length);
                    if(!dupes.includes(n)) {
                        chosenQ.push(questions[n]);
                        dupes.push(n);
                        rerolling = false;
                    } else { continue; }
                }
            }
            break
        case "Full":
            chosenQ = questions;
            break
        case "Help":
            console.log("not yet added");
            break
        default:
            console.log("huh??");
            break
    }
    build()
}

function update() {
    for (i in natures) {
        natures[i] = 0;
    }

    for (let i = 0; i < chosenQ.length; i++) {
        chosenQ[i].score();
    }

    let display = document.getElementById("display")
    let text = "";
    let highest = 1;
    let highlight = [];
    for (i in natures) {
        text += `<p id=${i}>${i}: ${natures[i]}</p>`
        if (natures[i] > highest){
            highest = natures[i];
            highlight = [i];
        } else if (natures[i] == highest){
            highlight.push(i);
        }
    }
    display.innerHTML = text;
    let results = document.getElementById("result");
    results.innerHTML = "You seem to be... "
    for (i of highlight){
        document.getElementById(i).classList.add('bold');
        results.innerHTML += allResults[game][i];
        if(i != highlight[highlight.length-1]){
            results.innerHTML += "<br><br>You also seem to be... ";
        }
    }
    return 0
}

roll();
update();