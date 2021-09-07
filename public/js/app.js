console.log('Client side javascript file is loaded');

fetch('http://puzzle.mead.io/puzzle').
then(response => {
   response.json().then(data => {
    console.log(data);
   }) ;
});

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#msg1');
const message2 = document.querySelector('#msg2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    if(location){
        search.value = '';
        message1.textContent = 'Loading...';
        message2.textContent = "";
        fetch('http://localhost:3000/weather?address='+location).then(response => {
            response.json().then(data => {
                if(data.error){
                    message1.textContent = 'Unable to find the location.Try another search!';
                }else{
                    message1.textContent = data.forecast;
                    message2.textContent = data.location;
                }
            });
        });
    }else{
        message1.textContent = "Please enter the location";
        message2.textContent = "";
    }
})