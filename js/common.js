// quantity of an element
function getQuantityOfPlayersById(elementId){
    const list = document.getElementById(elementId);
    const quantity = list.children.length;
    return quantity;
}

// get input field value
function getInputFieldValue(elementId){
    const field = document.getElementById(elementId);
    const fieldValueString = field.value;
    const fieldValue = parseInt(fieldValueString);
    return fieldValue;
}

// get display field value
function getDisplayFieldValue(elementId){
    const field = document.getElementById(elementId);
    const fieldValueString = field.innerText;
    const fieldValue = parseInt(fieldValueString);
    return fieldValue;
}

// set display value
function setDisplayValue(elementId, value){
    const field = document.getElementById(elementId);
    field.innerText = value;
}