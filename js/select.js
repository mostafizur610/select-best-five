// console.log('selected top player');
const playerArray = [];

function display(topPlayer) {
    const tableBody = document.getElementById('top-players');
    tableBody.innerHTML = '';

    if (topPlayer.length <= 5) {
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
        alert("Hello! I am an alert box!!");
    }
}


function addToTop(elememt) {
    // console.log(elememt.parentNode.children);
    // console.log(elememt.parentNode.children[0].innerText);

    const playerName = elememt.parentNode.children[0].innerText;
    // console.log(playerName);



    const playerobj = {
        playerName: playerName
    }
    // console.log(playerobj);
    playerArray.push(playerobj);
    // console.log(playerArray.length);
    display(playerArray);
}