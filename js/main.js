/*
  I wrote this code for frontend mentor challenge last year then 
  I thought of modifying this code to make our waiver calculator app
*/

/*--------------------------
 Selecting all elements
 --------------------------*/
const bill = document.getElementById('bill')
const tipButtons = document.querySelectorAll('.btn')
const customTipValue = document.getElementById('customTipBox')
const people = document.getElementById('tipPeople')
const tipAmountDisplay = document.getElementById('displayTipAmount')
const totalAmountDisplay = document.getElementById('displayTotalAmount')
const displayMidAmount = document.getElementById('displayMidAmount')
const displayFinalAmount = document.getElementById('displayFinalAmount')
const regFee = Number(15700)
let resetButton = document.querySelector('.btn-reset')
const errorMsg = document.querySelectorAll('.error')


/*--------------------------
 Tip Calculation Function
 ------------------------*/
function calculateTip(tip) {

    const tipAmount = parseFloat(bill.value) * parseFloat(tip)
    const finalTip = parseFloat(bill.value) - parseFloat(tipAmount)
    const totalAmount = parseFloat(finalTip) * parseFloat(people.value)
    const finalAmount = parseFloat(totalAmount) + parseFloat(7700)

    tipAmountDisplay.innerHTML = "$" + Number.parseFloat(totalAmount).toFixed(2)
    totalAmountDisplay.innerHTML = "$" + Number.parseFloat(finalAmount).toFixed(2)
    displayMidAmount.innerHTML = "$" + Number.parseFloat((finalAmount - regFee) * 0.5).toFixed(2)
    displayFinalAmount.innerHTML = "$" + Number.parseFloat((finalAmount - regFee) * 0.5).toFixed(2)

}

/*------------------------
 Reset Calculated Value
 -----------------------*/
resetButton.addEventListener('click', function () {
    tipAmountDisplay.innerHTML = "$0.00"
    totalAmountDisplay.innerHTML = "$0.00"
    displayMidAmount.innerHTML = "$0.00"
    displayFinalAmount.innerHTML = "$0.00"

    bill.value = 0
    people.value = 0
    customTipValue.value = ""
})


/*------------------
 Form Validation
 -----------------*/
function validation() {

    if (bill.value == "" || bill.value == 0) {
        bill.focus()
        bill.style.borderColor = "red"
        errorMsg[0].innerHTML = "Can't be zero"
        return false

    } else if (bill.value < 0) {
        bill.focus()
        bill.style.borderColor = "red"
        errorMsg[0].innerHTML = "Can't be a negative number"
        return false

    } else {
        errorMsg[0].innerHTML = ""
        bill.style.borderColor = "var(--primary-color)"
    }

    if (people.value == 0 || people.value == "") {
        people.focus()
        people.style.borderColor = "red"
        errorMsg[1].innerHTML = "Can't be zero"
        return false

    } else if (people.value < 0) {
        people.focus()
        people.style.borderColor = "red"
        errorMsg[1].innerHTML = "Can't be a negative number"
        return false

    } else {
        errorMsg[1].innerHTML = ""
        people.style.borderColor = "var(--primary-color)"
    }
}
