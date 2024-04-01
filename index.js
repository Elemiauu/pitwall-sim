const statusH = document.querySelector("#statusH");
const statusR = document.querySelector("#statusR");
const statusF = document.querySelector("#statusF");

const actionR = document.querySelector("#actionR");
const actionH = document.querySelector("#actionH");

const buttonR = document.querySelector("#buttonR");
const buttonH = document.querySelector("#buttonH");
const buttonF = document.querySelector("#buttonF");

const pcR = document.querySelector("#pcR");
const pcH = document.querySelector("#pcH");

const yellowFlag = document.querySelector(".flagBtn.yellow");
const redFlag = document.querySelector(".flagBtn.red");
const greenFlag = document.querySelector(".flagBtn.green");
const blackWhiteFlag = document.querySelector(".flagBtn.black-white");

const scBtn = document.querySelector(".extraBtn.sc");
const vscBtn = document.querySelector(".extraBtn.vsc");

const flagSpace = document.querySelector(".empty-space");

let currentStatus = "off"; 
let blinkingInterval = "";

function toggleTextH() {
    if (statusH.textContent === "Off") {
        statusH.textContent = "On";
        statusH.style.color = "green";
    } else {
        statusH.textContent = "Off";
        statusH.style.color = "red";
    }
}

function toggleTextR() {
    if (statusR.textContent === "Off") {
        statusR.textContent = "On";
        statusR.style.color = "green";
    } else {
        statusR.textContent = "Off";
        statusR.style.color = "red";
    }
}

function toggleTextF() {
    if (statusF.textContent === "Off") {
        statusF.textContent = "On";
        statusF.style.color = "green";
    } else {
        statusF.textContent = "Off";
        statusF.style.color = "red";
    }
}


function pitConfirm(name) {
    console.log(name);
    if (name === "russell") {
        if (actionR.innerHTML === "Box") {
            actionR.innerHTML = "Pit Confirmed";
            actionR.style.color = "green";
        } else if (actionR.innerHTML === "Pit Confirmed") {
            actionR.innerHTML = "Box";
            actionR.style.color = "red";
        }
    } else if (name === "hamilton") {
        if (actionH.innerHTML === "Box") {
            actionH.innerHTML = "Pit Confirmed";
            actionH.style.color = "green";
        } else if (actionH.innerHTML === "Pit Confirmed") {
            actionH.innerHTML = "Box";
            actionH.style.color = "red";
        }
    }
}


function toggleFlag(color, type) {
    console.log(color, type, currentStatus);

    if (type === "nat") {
        if (currentStatus === "off") {
            flagSpace.style.backgroundColor = color;
            currentStatus = "on";
        } else if (currentStatus === "on" && color === flagSpace.style.backgroundColor) {
            flagSpace.style.backgroundColor = "";
            currentStatus = "off";
        } else if (currentStatus === "on") {
            clearInterval(blinkingInterval);
            flagSpace.style.backgroundColor = color;
            currentStatus = "on";
        }
    }

    if (type === "sc") {
        if (currentStatus === "off") {
            flagSpace.style.backgroundColor = "yellow";
            currentStatus = "on";
            clearInterval(blinkingInterval);
            blinkingInterval = setInterval(() => {
                flagSpace.style.backgroundColor = flagSpace.style.backgroundColor === color ? "" : color;
            }, 200);
        } else if (currentStatus === "on") {
            clearInterval(blinkingInterval);
            flagSpace.style.backgroundColor = "";
            currentStatus = "off";
        }
    }

    if (type === "vsc") {
        if (currentStatus === "off") {
            flagSpace.style.backgroundColor = "yellow";
            currentStatus = "on";
            clearInterval(blinkingInterval);
            blinkingInterval = setInterval(() => {
                flagSpace.style.backgroundColor = flagSpace.style.backgroundColor === color ? "" : color;
            }, 1000);
        } else if (currentStatus === "on") {
            clearInterval(blinkingInterval);
            flagSpace.style.backgroundColor = "";
            currentStatus = "off";
        }
    }

    if (type === "chequered") {

        if (currentStatus === "off") {
            flagSpace.classList.add("chequered");
            currentStatus = "on";
            blinkingInterval = setInterval(() => {
                flagSpace.classList.toggle("chequered");
            }, 500);
        } 
        else if (currentStatus === "on") {
            clearInterval(blinkingInterval);
            flagSpace.classList.toggle("chequered")
            flagSpace.style.backgroundColor = "";
            currentStatus = "off";
        }

    }
}

pcR.addEventListener("click", () => {
    pitConfirm("russell");
});
pcH.addEventListener("click", () => { 
    pitConfirm("hamilton");
});



yellowFlag.addEventListener("click", () => {
    toggleFlag("yellow", "nat");
});

redFlag.addEventListener("click", () => {
    toggleFlag("red", "nat");
});

greenFlag.addEventListener("click", () => {
    toggleFlag("rgb(61, 234, 61)", "nat");
});

scBtn.addEventListener("click", () => {
    toggleFlag("yellow", "sc");
});

vscBtn.addEventListener("click", () => {
    toggleFlag("yellow", "vsc");
});

blackWhiteFlag.addEventListener("click", () => {
    toggleFlag("white", "chequered");
});


buttonF.addEventListener("click", toggleTextF)
buttonH.addEventListener("click", toggleTextH);
buttonR.addEventListener("click", toggleTextR);
