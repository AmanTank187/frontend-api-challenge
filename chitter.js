'use strict';

function viewAllPeeps(){
    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps").then(function (res) {
        return res.json();
    })
    .then(function (data){
        let list = document.createElement('ul')
        data.forEach(peep => {
            let listPeeps = document.createElement('li')
            let string = `${peep.body} <br> Posted by ${peep.user.handle} <br><br>`
            listPeeps.innerHTML = string
            list.appendChild(listPeeps) 
            
        });
        let divi = document.getElementById('app')
        divi.appendChild(list)
    })
}



viewAllPeeps();