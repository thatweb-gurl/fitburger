function mybtn(){
    let dot = document.querySelector('.dots');
    let contd = document.querySelector('.contd');
    let btnText = document.querySelector('#btn');

    if (dot.style.display === 'none') {
        dot.style.display = 'inline';
        contd.style.display = 'none';
        btnText.innerHTML = 'Read More';
    } else {
        dot.style.display  = 'none';
        contd.style.display = 'inline';
        btnText.innerHTML = 'Read Less';
    }
}

// bmi calculator script

const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == "" || weight == ""){
        alert('please fill all the input fields!');
        return;
    }

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2)

    document.querySelector('#result').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = 'Comment : You are Underweight!';
    }

    if(BMI >= 18.5 && BMI < 25){
        status = 'Comment : You are Healthy!'
    }

    if(BMI >= 25 && BMI < 30){
        status = 'Comment : You are overweight!'
    }

    if(BMI >= 30){
        status = 'Comment : You are Obese!'
    }

    document.querySelector('.comment').innerHTML =status;
});

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

