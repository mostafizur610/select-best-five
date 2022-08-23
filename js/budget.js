

let total;
//  Per Player section
document.getElementById('btn-calculate').addEventListener('click', function () {
    // per player input field
    const perPlayerCostField = document.getElementById('per-player-cost-field');
    const newCostAmountString = perPlayerCostField.value;
    const newCostAmount = parseFloat(newCostAmountString);

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


// total calculation part
document.getElementById('btn-total-calculate').addEventListener('click', function () {

    // for manager input field 
    const managerInputField = document.getElementById('manager-input-field');
    const managerFieldString = managerInputField.value;
    const managerField = parseFloat(managerFieldString);

    // for coach input field 
    const coachInputField = document.getElementById('coach-input-field');
    const coachFieldString = coachInputField.value;
    const coachField = parseFloat(coachFieldString);

    if (isNaN(managerField && coachField)) {
        alert('please provide the valid amount of cost');
        return;
    }

    // total output of the calculation 
    const totalCalculationAmount = document.getElementById('total-calculate');
    const calculationAmountString = totalCalculationAmount.innerText;
    const calculationAmount = parseFloat(calculationAmountString);

    //   sum of total expense
    const sumOfTotal = managerField + coachField + total;
    totalCalculationAmount.innerText = sumOfTotal;
});