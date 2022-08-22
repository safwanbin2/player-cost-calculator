// click event for player select button
document.getElementById('player').addEventListener('click', function(event){
    const btn = event.target;
    const card = event.target;
    const playerName = card.previousElementSibling.innerText;
    if(btn.innerText === 'Select'){

        // getting ol and creating li inside it with the value from cardName
        const list = document.getElementById('ol');
        if(list.children.length < 5){
            const newLi = document.createElement('li');
            newLi.innerText = playerName;
            list.appendChild(newLi);
            
            // disabling
            btn.setAttribute('disabled', '');
            btn.style.backgroundColor = 'grey';
            btn.style.cursor = 'none';
        }
    }
});

// click event for calculate button
document.getElementById('calculate').addEventListener('click', function(){
    const quantity = getQuantityOfPlayersById('ol');
    
    const perPlayerCost = getInputFieldValue('per-player');
    const playerExpenses = quantity * perPlayerCost;

    setDisplayValue('player-expenses', playerExpenses);
});

// clcik event for calculate total button
document.getElementById('calculate-total')