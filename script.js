const form = document.getElementById('form')
const username = document.getElementById('username')
const basename = document.getElementById('basename')
const email = document.getElementById('email')
const password = document.getElementById('password')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    Validate();
})


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const basenameVal = basename.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();

      //username
      if(usernameVal === ""){
        setErrorMsg(username, 'first name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else{
        setSuccessMsg(username);
    }

    //last name

    if(basenameVal === ""){
        setErrorMsg(basename, 'last name cannot be blank');
    }
    else if(basenameVal.length <=1){
        setErrorMsg(basename, 'cannot be less than 2 characters');
    }
    //email
    if(emailVal === ""){
        setErrorMsg(email, 'email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email is not valid');
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'password cannot be blank');
    }
    else if(passwordVal.length <= 4){
        setErrorMsg(password, 'minimum of 5');
    }
}
