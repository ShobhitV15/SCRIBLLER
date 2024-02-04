
function validate1() {
    var username = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputUserName').value;
    var  password1= document.getElementById('exampleInputPassword1').value;
    var username2 = document.getElementById('exampleInputPassword2').value;
  
    if (username === '' || password === ''||password1 ===''|| username2==='' ) {
      alert('Please fill out all the fields.');
    } else {
      // Process the form submission or navigate to the next page
      // For demonstration, let's just show an alert for successful login
      alert('Login successful!');
    }
  }
  
  function validate2() {
    var username13 = document.getElementById('exampleInputUserName22').value;
    var password12 = document.getElementById('exampleInputPassword133').value;
  
    if (username13 === '' || password12 === '') {
      alert('Please fill out all the fields.');
    } else {
      // Process the form submission or navigate to the next page
      // For demonstration, let's just show an alert for successful login
      alert('Login successful!');
    }
  }
  