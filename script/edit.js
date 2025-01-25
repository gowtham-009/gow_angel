const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const val = urlParams.get('val');
if(val==1){
    document.getElementById('mobilebox').classList.remove('hidden')
    document.getElementById('emailbox').classList.add('hidden')
    document.getElementById('addressbox').classList.add('hidden')
}
else if(val==2){
    document.getElementById('emailbox').classList.remove('hidden')
    document.getElementById('mobilebox').classList.add('hidden')
    document.getElementById('addressbox').classList.add('hidden')
}
else if(val==3){
    document.getElementById('addressbox').classList.remove('hidden')
    document.getElementById('mobilebox').classList.add('hidden')
    document.getElementById('emailbox').classList.add('hidden')
}


function allowTenDigits(event) {
    const inputField = event.target;
    const value = inputField.value;
    
    // Allow only numeric keys and prevent input if length is already 10
    if (value.length >= 10 && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        return false;
    }
    
    // Allow only numbers
    if (event.key < '0' || event.key > '9') {
        return false;
    }

    return true;
}

const mobileform=document.getElementById('mobilenumber')
const mobileinput=document.getElementById('number')
const mobileerror=document.getElementById('mobile_error')

mobileform.addEventListener('submit',(event)=>{
event.preventDefault()
let isValid=true
mobileerror.textContent=''

if (mobileinput.value === '') {
mobileerror.textContent = 'Mobile Number is Required';
isValid = false;
} else if (mobileinput.value.length !== 10) {
    mobileerror.textContent = 'Mobile Number must be strictly 10 digits';
    isValid = false;
} else {
    mobileerror.textContent = ''; 
}


if(isValid){
mobilefunction()
}
})

const mobilefunction=()=>{
localStorage.removeItem('mobilenumber')
localStorage.setItem('mobilenumber',mobileinput.value)
window.location.href='profiledetails.html'
}


const emailform=document.getElementById('emailedit')
const emailinput=document.getElementById('emailid')
const email_error=document.getElementById('email_error')

emailform.addEventListener('submit', (event)=>{
    event.preventDefault()
    let isValid=true

    if (emailinput.value === '') {
        email_error.textContent = 'Email is Required';
        isValid = false;
    }

    if(isValid){
        emailfunction()
    }
})

const emailfunction=()=>{
    localStorage.removeItem('emailid')
    localStorage.setItem('emailid',emailinput.value)
    window.location.href='profiledetails.html'
    }


    const addressform=document.getElementById('addressedit')
const addressinput=document.getElementById('address')
const address_error=document.getElementById('address_error')

addressform.addEventListener('submit', (event)=>{
    event.preventDefault()
    let isValid=true

    if (addressinput.value === '') {
        address_error.textContent = 'Address is Required';
        isValid = false;
    }

    if(isValid){
        addressfunction()
    }
})

const addressfunction=()=>{
    localStorage.removeItem('address')
    localStorage.setItem('address',addressinput.value)
    window.location.href='profiledetails.html'
    }