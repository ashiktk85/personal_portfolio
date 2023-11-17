const form=document.getElementsByClassName('contactForm');
const nameError=document.getElementById('name-error');
const phoneError=document.getElementById('phoneError');
const submitError=document.getElementById('submit-error');


function validateName(){
  const name=document.getElementById('name').value;

  if (name.length==0){
    nameError.innerHTML="Name is required ";
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML="Please enter your full name"
    return false;
  }
  nameError.innerHTML='valid'
  return true;
}

function validatePhone(){
  const phone=document.getElementById('c-phone').value;

  if(phone.length==0){
    phoneError.innerHTML="phone number is required";
    return false;
  }

  if(phone.length !==10){
    phoneError.innerHTML="phone number should be 10 digits";
    return false;
  }

  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML="only digits please";
    return false;
  }

  phoneError.innerHTML='<i class="fa-solid fa-square-check" style="color: #02ca4f;"></i>'
return true;
   

}

function validateForm(){

  if(!validateName() || !validatePhone()){
    submitError.innerHTML='please fix your error to submit';
    return false;
  }
}