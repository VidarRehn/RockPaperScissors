
let stenButton = document.querySelector("#sten");
let saxButton = document.querySelector("#sax");
let påseButton = document.querySelector("#påse");

let output = document.querySelector("#output");
let output1 = document.querySelector("#output1");
let output2 = document.querySelector("#output2");
let winsOutput = document.querySelector("#vinster");
let lossesOutput = document.querySelector("#förluster");
let drawsOutput = document.querySelector("#lika");

let computerOptions = ["Sten", "Sax", "Påse"];

let amountWins = 0;
let amountLosses = 0;
let amountDraws = 0;

[stenButton, saxButton, påseButton].forEach(button => {
    button.addEventListener("click", (x) => {
        let myChoice = x.target.value;
        let computerChoice = computerOptions[Math.floor(Math.random()*3)];
        if (myChoice == computerChoice){
            output.innerText = `Du valde ${myChoice.toUpperCase()}.`;
            output1.innerText = `Datorn valde också ${computerChoice.toUpperCase()}.`;
            output2.innerText = `Matchen slutade lika.`;
            output2.style.color = "orange";
            amountDraws++;
            drawsOutput.innerText = amountDraws;
            drawsOutput.style.color = "orange";
        } else if ((myChoice == "Sten" && computerChoice == "Sax") || (myChoice == "Sax" && computerChoice == "Påse") || (myChoice == "Påse" && computerChoice == "Sten")){
            output.innerText = `Du valde ${myChoice.toUpperCase()}.`;
            output1.innerText = `Datorn valde ${computerChoice.toUpperCase()}.`;
            output2.innerText = `Du vann :)`;
            output2.style.color = "green";
            amountWins++;
            winsOutput.innerText = amountWins;
            winsOutput.style.color = "green";
        } else {
            output.innerText = `Du valde ${myChoice.toUpperCase()}.`;
            output1.innerText = `Datorn valde ${computerChoice.toUpperCase()}.`;
            output2.innerText = `Du förlorade :(`;
            output2.style.color = "red";
            amountLosses++;
            lossesOutput.innerText = amountLosses;
            lossesOutput.style.color = "red";
        }
    })
})
