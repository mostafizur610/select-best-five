


document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCostField = document.getElementById('per-player-cost-field');
    const newCostAmountString = perPlayerCostField.value;
    const newCostAmount = parseFloat(newCostAmountString);


    perPlayerCostField = '';
    if (isNaN(newCostAmount)) {
        alert('please provide the valid amount of cost');
        return;
    }


    const playerExpenses = document.getElementById('player-expenses');
    const playerExpensesString = playerExpenses.innerText;
    const newPlayerExpenses = parseFloat(playerExpensesString);


    const playerNumber = playerArray.length;
    const totalPlayerEspenses = playerNumber * newCostAmount;
    playerExpenses.innerText = totalPlayerEspenses;




});