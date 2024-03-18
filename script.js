const inputs=document.querySelectorAll("input"),
button = document.querySelector("button"),
mobile=document.getElementById("mobile"),
expire=document.getElementById("expire");
let OTP="";

function generateOTP(){
    
    for(let i=0;i<4;i++)
    {
        OTP+=Math.floor(Math.random()*10);
    }
    alert("Your OTP= "+ OTP);
    console.log(OTP);
}
inputs[0].focus();
expire.innerText=30;
const expireInterval=setInterval( function () {
    expire.innerText--;
    if(expire.innerText==0){
        clearInterval(expireInterval);
    }
    
}, 1000);
function clearOTPs(){
    inputs.forEach((input)=>{
        input.value="";
        input.setAttribute("disabled",true);
    });
    clearInterval(expireInterval);
    expire.innerText=0;
}
inputs.forEach((input,index)=>{
    input.addEventListener("keyup",function(e){
        const currentinput=input,
        nextInput=input.nextElementSibling,
        preInput=input.previousElementSibling;
        if(nextInput && nextInput.hasAttribute("disabled") && currentinput != " "){
            nextInput.removeAttribute("disabled",true);
            nextInput.focus();
        }
        if (e.key==="Backspace"){
            inputs.forEach((input,index1)=>{
                if(index<=index1 && preInput){
                    input.setAttribute("disabled",true);
                    preInput.focus();
                }
            });
        }
       
        
       
    });
});

window.addEventListener("load",() => {
    let x= prompt("Please enter your mobile number to verify your account");
    if(x){
        mobile.innerText=x;
        generateOTP();
    }
})
button.addEventListener("click",()=>{
    let verify="";
    
    inputs.forEach((input)=>{
        verify +=  input.value ;
        // verify+=" ";
        
    });

    console.log(verify);
    if(verify==OTP){
        alert("Your account has been varified succesfully");
        clearOTPs()
    }
    else{
        alert("Your varification is failed");

         clearOTPs();
    }
})
