document.getElementById('player').addEventListener('click', function(event){
    const btn = event.target;
    const card = event.target;
    const playerName = card.previousElementSibling.innerText;
    if(btn.innerText === 'Select'){
        
        // getting ol and creating li inside it with the value from cardName
        const list = document.getElementById('ol');
        const newLi = document.createElement('li');
        newLi.innerText = playerName;
        list.appendChild(newLi);

        // disabling
        btn.setAttribute('disabled', '');
        btn.style.backgroundColor = 'grey';
        btn.style.cursor = 'none';
    }
    else{
        return 0;
    }
});