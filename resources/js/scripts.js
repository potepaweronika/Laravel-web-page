function store() { //stores items in the localStorage
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var DogVsCat = document.getElementsByName('DvC').value;
    var FavAnimal = document.getElementById('FavAnimal').value;

    var selected = new Array();
    var emotion = document.getElementById("emotion");
    var chks = emotion.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
        if (chks[i].checked) {
            selected.push(chks[i].value);
        }
    }

    const answer = {
        fname: fname,
        lname: lname,
        mail: mail,
        phone: phone,
        //DogVsCat: DogVsCat,
        emotion: selected,
        FavAnimal: FavAnimal,
    }

    window.localStorage.setItem('odp', JSON.stringify(answer));
}

function nadpisz(){
    var zmienna = document.getElementById("retrieve_text").innerHTML
    console.log(zmienna)
    window.localStorage.setItem('odp', zmienna)
    window.location.reload(true);
}

function retrieveRecords(){ 
    var key = 'odp';
    console.log("retrive records");
    var records = window.localStorage.getItem(key); 
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "retrieve_text");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}
function removeItem(){ 
    var key = 'odp'; 
    localStorage.removeItem(key) 
    console.log("remove items");
}

function clearStorage(){ 
    localStorage.clear()
    console.log("clear records");
}

window.onload = function () { 
    document.getElementById("formularz").onsubmit = store
    document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords
}

/*const data = window.localStorage.getItem('odp')

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
