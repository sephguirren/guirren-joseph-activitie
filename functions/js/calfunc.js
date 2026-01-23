let display = document.getElementById("display");

function num(val) {
    display.value += val;
}

function oper(val) {
    display.value += val;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function ac() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}