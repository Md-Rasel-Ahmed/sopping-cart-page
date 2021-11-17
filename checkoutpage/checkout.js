let username=document.querySelector('#username');
let input=document.querySelector('input');
let wrong=document.querySelector('.wrong');
let numwrong=document.querySelector('.number-wrong')
let wrong1=document.querySelector('.wrong1')
let success=document.querySelector('.success');
let button=document.querySelector('#button');
let number=document.querySelector('#number');
let password=document.querySelector('#password');
let conPass=document.querySelector('#confirm-password');
let passwron=document.querySelector('.pass-wrong');
let confirmwrong=document.querySelector('.confirm-wrong');
let address=document.querySelector('#address');
let addressWrong=document.querySelector('.address-wrong');




button.addEventListener('click',function(event){
usernam()
pass()
numb();
confirmPass()
addresss()
})
function usernam(){
    if(username.value===''){
      success.innerHTML=''
      wrong.innerHTML='Name is required!'
      username.style.border='red'
      return false;
    }
}
function addresss(){
    if(address.value===''){
      success.innerHTML=''
      addressWrong.innerHTML='Address is required!'
      address.style.border='red'
      return false;
    }
}
function numb(){
    if(number.value===''){
        numwrong.innerHTML='Number is requred'
        return false;
    }
}
function pass(){
    if(password.value===''){
        passwron.innerHTML='Password is required'
        return false;
    }
}
function confirmPass(){
    if(password.value!==conPass.value){
        confirmwrong.innerHTML='Password do not match'
    }else if(conPass.value===''){
        confirmwrong.innerHTML='Password is required'
        return false;
    }else if(password.value===conPass.value){
        confirmwrong.innerHTML=''
    }
}
username.addEventListener('keyup',function(){
    if(username.value===''){
        usernam()
    }else{
        wrong.innerHTML='';
    }
})
number.addEventListener('keyup',function(){
    if(number.value===''){
        numb()
    }else{
        numwrong.innerHTML='';
    }
})
password.addEventListener('keyup',function(){
    if(password.value===''){
        pass()
    }else{
        passwron.innerHTML='';
    }
})
conPass.addEventListener('keyup',function(){
  confirmPass()
  if(conPass.value===''){
    confirmwrong.innerHTML='Password is required'
}
    
})

