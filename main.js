$('input[type="radio"]').click(function() {
  var inputValue = $(this).attr("value");
  formContainer.setAttribute("style", "height:750px");
  if (inputValue == "one-year") {
    $("#option2").hide();
    $("#option1").show();
  } else {
    $("#option1").hide();
    $("#option2").show();
  }
});

function validatePhoneNumber(phone) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  return re.test(phone);
}

function validateEmail(email) {
  const mail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return mail.test(email);
}

function validateForm (event) {
  var phone = document.getElementById('top-phone').value;
  var email = document.getElementById('top-mail').value;
  if (!validatePhoneNumber(phone)) {
    if (!validateEmail(email)) {
      document.getElementById('phone_error').classList.remove('hidden');
      document.getElementById('email_error').classList.remove('hidden');
    }
    else {
      document.getElementById('phone_error').classList.remove('hidden');
    }}
    else {
      if (!validateEmail(email)) {
        document.getElementById('email_error').classList.remove('hidden');
      }
      else {
        document.getElementById('phone_error').classList.add('hidden');
        document.getElementById('email_error').classList.add('hidden');
        alert ("Đăng ký thành công");
      }
    }
      event.preventDefault();
  }

document.getElementById('myform').addEventListener('submit', validateForm);
