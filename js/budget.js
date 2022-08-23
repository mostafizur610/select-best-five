

let total;
//  Per Player section
document.getElementById('btn-calculate').addEventListener('click', function () {
    // per player input field
    const perPlayerCostField = document.getElementById('per-player-cost-field');
    const newCostAmountString = perPlayerCostField.value;
    const newCostAmount = parseFloat(newCostAmountString);

    // perPlayerCostField = '';
    if (isNaN(newCostAmount)) {
        alert('please provide the valid amount of cost');
        return;
    }
    //  perplayer espences output section
    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const newPlayerExpenses = parseFloat(playerExpensesString);

    //  calculation per player
    const playerNumber = playerArray.length;
    const totalPlayerEspenses = (playerNumber * newCostAmount);
    total = totalPlayerEspenses;
    playerExpenses.innerText = totalPlayerEspenses;
});


document.getElementById('btn-total-calculate').addEventListener('click', function () {

    // for manager input field 
    const managerInputField = document.getElementById('manager-input-field').value;
    const managerFieldString = managerInputField.innerText;
    const managerField = parseFloat(managerFieldString);

    // for coach input field 

    const coachInputField = document.getElementById('coach-input-field').value;
    const coachFieldString = coachInputField.innerText;
    const coachField = parseFloat(coachFieldString);

    console.log(managerInputField);
    console.log(coachInputField);


    // total output of the calculation 

    const totalAmount = document.getElementById('total-calculate');
    // const totalAmountString = totalAmount.innerText;
    // const total = parseFloat(totalAmountString);

    // const newPlayerExpenses = playerExpenses.innerText;
    const sumOfTotal = parseFloat(managerInputField) + parseFloat(coachInputField) + total;
    console.log(sumOfTotal);
    totalAmount.innerText = sumOfTotal;

});