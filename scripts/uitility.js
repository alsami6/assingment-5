function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function funBtn(elementId){
    const CC = document.getElementById(elementId)
    CC.style.backgroundColor = 'green';
    CC.style.color = 'white';
}

