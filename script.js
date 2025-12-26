const calculate = () => {
    let webtechnology = document.querySelector("#webtechnology").value;
    let database = document.querySelector("#database").value;
    let automata = document.querySelector("#automata").value;
    let assembly = document.querySelector("#assembly").value;
    let grades = "";

    let totalgrades =
        parseFloat(webtechnology) +
        parseFloat(database) +
        parseFloat(automata) +
        parseFloat(assembly);

    let percentage = (totalgrades / 400) * 100;
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    if (webtechnology == "" || database == ""
        || automata == "" || assembly == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
        if (percentage >= 39.5) {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Pass. `;
        } else {
            document.querySelector(
                "#showdata"
            ).innerHTML =
                ` Out of 400 your total is  ${totalgrades} 
          and percentage is ${percentage}%. <br> 
          Your grade is ${grades}. You are Fail. `;
        }
    }
};