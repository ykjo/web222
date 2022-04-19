var productdescription = document.getElementById('productdescription');
var username = document.getElementById('username');
var errors = document.getElementById('errors');
const checkbox = document.signup.SupplierStatus.length;
const myform = document.getElementById('signup');
myform.addEventListener('submit', (e) => 
{
var errorfound = []
var flag = 0;
var checked = 0;
if(!productdescription.value.match(/^[A-Z][A-Za-z ]+$/))
{ 
errorfound.push("Must start with a cap and only alphabet allowed. Must contain at least 20 characters.");
flag ++;
}
if(!username.value.charAt(0).match(/[A-Z]/) || username.value.length < 6)
{   
errorfound.push("Username must start with an alphabet, must have at least 6 characters.");
flag ++;
}
for(var i = 0; i < checkbox; i++)
{  
if(document.signup.SupplierStatus[i].checked == true){
checked++;
}
}
if(checked == 0)
{   
flag ++;
errorfound.push('Please select at least one check box');
}
if(flag != 0) 
{ 
e.preventDefault();
errors.innerText = errorfound.join ("");
}
});
form.addEventListener('reset', (e) => {
errors.style.display = 'none';
});