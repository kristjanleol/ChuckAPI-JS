//Listen to the click event on the get-jokes button

//select the button, add the event listener

document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
    const userNumber = document.querySelector('input[type="number"]').value;
    //add proxy
    const proxyrl = "https://cors-anywhere.herokuapp.com/";
    //console.log(typeof(userNumber));

    //GET request
    
    fetch(`${proxyUrl}http://api.icndb.com/jokes/random/${userNumber}`)
    .then(function(response){
        console.log(response);
        return response.json();
       
    })
    .then(function(data){
        let output = '';
        //Each joke in data.value array
        data.value.forEach(joke => {
            output += `<li>${joke.joke}</li>`
            console.log(joke.joke);    
        });
        document.querySelector('.jokes').innerHTML = output;
    });
     
    event.preventDefault();
}
