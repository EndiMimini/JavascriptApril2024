

var users = [
    'test@gmail.com',
    'admin@betaplan.al',
    'endimimini@betaplan.al'
]
var errorMessage = document.getElementById('error')
buttonsubmit = document.getElementById('submitButton')
usersDiv = document.querySelector('#users')
displayUsers()
function checkEmail(element){
    var matched = false
    for(var i = 0; i<users.length;i++){
        if (element.value == users[i]){  
            errorMessage.classList.remove('d-none')
            buttonsubmit.disabled = true
            matched = true
        }
        else{
            errorMessage.classList.add('d-none')
            buttonsubmit.disabled = false
        }
        if (matched){
            break;
        }
       
    }

   
}

function addUser(e){
    e.preventDefault();
    newUser = document.getElementById('emailInput')
    userEmail = newUser.value
    users.push(userEmail)
    newUser.value=''
    console.log(users)
    displayUsers()
}

function displayUsers(){
    for(var i = 0; i<users.length;i++){
        var p = document.createElement('p');
        p.textContent = `User email: ${users[i]}`
        usersDiv.appendChild(p);

    }
}



function removeBtn(el){
    el.remove()
}


function changeText(el){
    if (el.innerText ==='Register'){
        el.innerText = 'Login'
    }
    else{
        el.innerText = 'Register'
    }
    
}