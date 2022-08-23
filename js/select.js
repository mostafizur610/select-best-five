
//  display top player section (max = 5 player)
const playerArray = [];

function display(topPlayer) {
    const tableBody = document.getElementById('top-players');
    tableBody.innerHTML = '';
    for (i = 0; i < topPlayer.length; i++) {
        const name = playerArray[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th class="text-white p-2">${i + 1} .</th>
            <td class="text-white">${name}</td>
            `;
        tableBody.appendChild(tr);
    }
}

// condition and display
function addToTop(elememt) {
    const playerName = elememt.parentNode.children[0].innerText;
    const playerobj = {
        playerName: playerName
    }
    if (playerArray.length + 1 === 6) {
        alert("You can not added more then five players!!");
        return;
    }
    playerArray.push(playerobj);
    display(playerArray);
    elememt.disabled = true;
    elememt.style.color = 'rgba(239, 239, 239, 0.3)';
    elememt.style['pointer-events'] = 'none';
}
