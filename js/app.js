document.getElementById('player').addEventListener('click', function(event){
    const btn = event.target.innerText;
    if(btn === 'Select'){
        const list = document.getElementById('ol');
        const newLi = document.createElement('li');
        newLi.innerText = 'name';
        list.appendChild(newLi);
    }
    else{
        
    }
});