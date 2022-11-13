// envoi du formulaire d'inscription

const formSignup = document.getElementById('emailSend');

formSignup.addEventListener('click', function (event) {

    event.preventDefault();


    let email = document.getElementById('email').value;
    

    let profil = {

        email: email,
        

    };



    //////Envoi du formulaire au backend

    const inscription = {

        method: 'POST',
        headers: {

            'Content-Type': 'application/json'

        },

        body: JSON.stringify(profil),
        mode: 'cors',
        cache: 'default'

    };



    // fetch("http://localhost:8080/api/signup", inscription)

    fetch("http://funkthetown.net/api/signup", inscription)
        
        .then(function (response) {
            if (response.ok) {
                window.location.href = "Funkthetown_Sub_Conf.html"
            }

            return response.json();

        })


        .then(response => {
            alert(JSON.stringify(response))

        })
        .catch(error => alert("Erreur:" + error));



});