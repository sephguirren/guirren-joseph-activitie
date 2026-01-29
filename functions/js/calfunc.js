let display = document.getElementById("display");
let operatordisplay = document.getElementById("operator");
let savednum = "";

function num(val) {
    if (display.value === "0") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function oper(op) {
    savednum = display.value;
    operatordisplay.value = op;
    display.value = "0";
}

function calculate() {
    let secondnum = display.value;
    let op = operatordisplay.value;
    let output = savednum + op + secondnum;

    try {
        display.value = eval(output);
    } catch (error) {
        display.value = "Error";
    }

    operatordisplay.value = "";
    savednum = "";
}

function ac() {
    display.value = "0";
    operatordisplay.value = "";
    savednum = "";
}

function del() {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}