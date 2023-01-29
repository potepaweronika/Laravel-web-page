/*const data = window.localStorage.getItem('dane')

fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: data
}).then(res => {
    return res.json()
    })
    .then(data => console.log(data))*/

    const dogImage = document.getElementById('dog-img');
    const dogButton = document.getElementById('btn-dog');
    
    dogButton.addEventListener('click', fetchDogImage);
    
    function fetchDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                dogImage.innerHTML = `<img src="${data.message}"/>`;
            })
    }