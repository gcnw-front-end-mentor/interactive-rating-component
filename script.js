let circles = ['one','two','three','four','five'];
let circleElements = [];
let activeCircle = null;

circles.forEach(circle => {
    circleElements.push(document.getElementById(circle));
})

const changeColor = (selection) => {
    circleElements.forEach(element => element.style.backgroundColor = '');
    circleElements.forEach(element => element.style.color = '');
    selection.currentTarget.style.backgroundColor = 'hsl(25, 97%, 53%)';
    selection.currentTarget.style.color = 'white';
    if(activeCircle === null){
        activeCircle = circleElements.indexOf(selection.currentTarget);
    }
    else{
        circleElements[activeCircle].style.backgroundColor = '';
        activeCircle = circleElements.indexOf(selection.currentTarget);
    }
}
    
circleElements.forEach(circle => {
    circle.addEventListener('click',changeColor);
})

const submitClick = () => {
    // circleElements.forEach(element => element.style.backgroundColor = '')
    // circleElements[activeCircle].style.backgroundColor = 'hsl(25, 97%, 53%)';
    // submitButton.style.backgroundColor = 'white';
    // submitButton.style.color = 'hsl(25, 97%, 53%)';
    if(activeCircle == null){
        alert("Error: No rating selected!")
    }
    else {
        document.getElementsByClassName('mainContainerBefore')[0].style.display = 'none';
        document.getElementsByClassName('mainContainerAfter')[0].style.display = 'flex';
        document.getElementById('selectedNumberConfirmation').textContent = 'You selected ' + (activeCircle+1) + ' out of 5';
    }

}

let submitButton = document.getElementById('submit')
submitButton.addEventListener('click',submitClick);

