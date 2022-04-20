let circles = ['one','two','three','four','five'];
let circleElements = [];
let activeCircle = null;

circles.forEach(circle => {
    circleElements.push(document.getElementById(circle));
})

const changeColor = (selection) => {
    circleElements.forEach(element => element.style.backgroundColor = '')
    selection.currentTarget.style.backgroundColor = 'hsl(25, 97%, 53%)';
    if(activeCircle === null){
        activeCircle = circleElements.indexOf(selection.currentTarget);
    }
    else{
        circleElements[activeCircle].style.backgroundColor = 'hsl(217, 12%, 63%)';
        activeCircle = circleElements.indexOf(selection.currentTarget);
    }
}
    
circleElements.forEach(circle => {
    circle.addEventListener('click',changeColor);
})

const submitClick = () => {
    circleElements.forEach(element => element.style.backgroundColor = '')
    circleElements[activeCircle].style.backgroundColor = 'hsl(25, 97%, 53%)';
    submitButton.style.backgroundColor = 'white';
    submitButton.style.color = 'hsl(25, 97%, 53%)';
}

let submitButton = document.getElementById('submit')
submitButton.addEventListener('click',submitClick);

