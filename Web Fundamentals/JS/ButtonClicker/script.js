function authentication(element){
    if (element.innerText=='Login'){
        element.innerText = 'Logout'
    }else{
        element.innerText = 'Login'

    }
}

function removeThis(element){
    element.remove()
}


function addLike(idOfPost){
    likeTag = document.getElementById(idOfPost)
    likeTag.innerText = parseInt(likeTag.innerText)+1
}
