/* Change the content of the button from 'Login' to 'Logout' and vice versa */
function login(e){
    switch(e.innerText){
        case 'Login':
            e.innerText = "Logout";
            break;
        default:
            e.innerText = "Login";
            break;
    }
}

/* Remove an element */
function removeElement(e){
    e.remove();
}