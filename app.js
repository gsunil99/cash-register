var billAmountId = document.querySelector("#bill-amount");
var cashGivenId = document.querySelector("#cash-given");
var btnCalculate = document.querySelector("#btn-calculate");
var para = document.querySelector("#para");
var tableList = document.querySelectorAll(".no-of-notes");
var pWords = document.querySelector("#p-words");
var cashToBeReturned,tempCash;
var notes = [2000, 500, 100, 20, 10, 5, 1]

btnCalculate.addEventListener("click",onClickCalculate)


function isvalid(number) {
    return !isNaN(number) && number.trim().length > 0;
}

function nonZero(number) {
    return Number(number) >= 0;
}

function onClickCalculate(){
    billAmount = billAmountId.value;
    cashGiven = cashGivenId.value;
    if(isvalid(billAmount) && nonZero(billAmount) && isvalid(cashGiven) && nonZero(cashGiven)){
        billAmount = parseInt(billAmount);
        cashGiven = parseInt(cashGiven);
        if(cashGiven>=billAmount){
            if (billAmount === 0 && cashGiven > 0) {
                para.innerText = "Thanks for the free cash!!!"
            }
            else {
                cashToBeReturned = cashGiven - billAmount;
                tempCash = cashToBeReturned;
                para.innerText = "Cash to be returned: ₹" + cashToBeReturned;
                calculateChange(cashToBeReturned)
            }
        }  
        else{
            para.innerHTML = "We have some openings to wash dishes!";
        }
    }
    else{
        para.innerHTML = "INVALID";
    }
}

function calculateChange(cashToBeReturned) {
    var words = ""
    for (var i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(cashToBeReturned / notes[i])
        tableList[i].innerText = noOfNotes;
        cashToBeReturned = cashToBeReturned % notes[i];

        // for words
        if (noOfNotes > 0) {
        words += noOfNotes + " x ₹" + notes[i] +" = "+noOfNotes*notes[i]+ "\n"
    }
    }
    words += "--------\nReturn: ₹" + tempCash;
    pWords.innerText = words;
}