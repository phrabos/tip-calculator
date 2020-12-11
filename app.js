// selectors

const billAmount = document.getElementById("bill-amount");
const serviceSelector = document.getElementById("service-selector");
const ten = document.getElementById("ten");
const twelve = document.getElementById("twelve");
const fifteen = document.getElementById("fifteen");
const eighteen = document.getElementById("eighteen");
const twenty = document.getElementById("twenty");
const twentyFive = document.getElementById("twenty-five");

const button = document.getElementById("button");
const tipDisplay = document.getElementById("tip-display");

// event listener
button.addEventListener("click", () => {

    switch (serviceSelector.value) {
        case ten.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(ten.value)).toFixed(2);            
            break;
        case twelve.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(twelve.value)).toFixed(2);    
            break;
            case fifteen.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(fifteen.value)).toFixed(2);    
            break;
            case eighteen.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(eighteen.value)).toFixed(2);    
            break;
            case twenty.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(twenty.value)).toFixed(2);    
            break;
            case twentyFive.value:
            tipDisplay.innerText = (Number(billAmount.value) * Number(twentyFive.value)).toFixed(2);    
            break;
        default: tipDisplay.innerText = "$1000"
            break;
    }
    
    


});