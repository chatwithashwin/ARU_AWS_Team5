function Click_Register()
{
  alert("Register clicked");
}


function Click_SignIn()
{
  
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  alert("Sign in clicked");
  if(username == '')
  {
    alert("Please enter the username");
  }
  else if(password == '')
  {
    alert("Please enter the password");
  }
  else
  {
    location.href = './authenticate?username='+username+'&slug='+password;

  }


}

