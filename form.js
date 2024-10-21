window.onload = function() {

    //check local storage support
    if (localStorage) {
  
        //event listener for submit
        document.getElementById('myform').addEventListener('submit', function() {
            //save first name
            var fname = document.getElementById('fname').value;
            localStorage.setItem('fname', fname);

            //save last name
            var lname = document.getElementById('lname').value;
            localStorage.setItem('lname', lname);

            //save email
            var email = document.getElementById('email').value;
            localStorage.setItem('email', email);

            //save years of experience
            var experience = document.getElementById('experience').value;
            localStorage.setItem('experience', experience);

            //save role selected
            var roles = document.getElementsByName('role');
                for (var i = 0; i < roles.length; i++) {
                    if (roles[i].checked) {
                        localStorage.setItem('role', roles[i].value);
                    }
                }

            // save selected factors
            var factors = document.querySelectorAll('input[type=checkbox]');
            var selectedFactors = [];
            factors.forEach(function(factor) {
                if (factor.checked) {
                    selectedFactors.push(factor.value);
                }
            });
            localStorage.setItem('factors', JSON.stringify(selectedFactors));

            //save text area input
            var description = document.querySelector('textarea[name="description"]').value;
            localStorage.setItem('description', description);

            // save colour input
            var favcolor = document.getElementById('favcolor').value;
            localStorage.setItem('favcolor', favcolor);

            alert("Form submitted! Saved in local storage.")
      });
  
    }
  
  }
  