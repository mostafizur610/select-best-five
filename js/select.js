// console.log('selected top player');
const playerArray = [];

function display(topPlayer) {
    const tableBody = document.getElementById('top-players');

    if (topPlayer.length <= 5) {
        tableBody.innerHTML = '';
        for (i = 0; i < topPlayer.length; i++) {
            // console.log(playerArray[i].playerName);
            const name = playerArray[i].playerName;
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <th class="text-white p-2">${i + 1} .</th>
            <td class="text-white">${name}</td>
            `;
            tableBody.appendChild(tr);
        }
    }
    else {
        alert("You can not added more then five players!!");
        return;
    }
}


function addToTop(elememt) {
    const playerName = elememt.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName
    }
    playerArray.push(playerobj);
    display(playerArray);
}





// document.getElementById('btn-card01').onclick = function(){
//    this.disabled = true;
// }



// function disableButton(elememtId) {
//     // document.getElementById(btnId).disabled = 'true';
//     elememtId.disabled = true;
// }