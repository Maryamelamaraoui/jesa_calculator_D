// Get the radio buttons and additional checkboxes
const maleRadio = document.getElementById('male');
const femaleRadio = document.getElementById('female');
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// Add event listeners to the radio buttons
femaleRadio.addEventListener('change', hideAdditionalCheckboxes);
maleRadio.addEventListener('change', showAdditionalCheckboxes);

// Function to hide the additional checkboxes
function hideAdditionalCheckboxes() {
  checkbox1.checked = false;
  checkbox2.checked = false;
  additionalCheckboxes.style.display = 'none';
}

// Function to show the additional checkboxes
function showAdditionalCheckboxes() {
  additionalCheckboxes.style.display = 'block';
}

// Add event listeners to the checkboxes
checkbox1.addEventListener('change', handleCheckboxSelection);
checkbox2.addEventListener('change', handleCheckboxSelection);

// Function to handle checkbox selection
function handleCheckboxSelection(event) {
  const selectedCheckbox = event.target;

  if (selectedCheckbox.checked) {
    if (selectedCheckbox.id === 'checkbox1') {
      checkbox2.checked = false;
    } else if (selectedCheckbox.id === 'checkbox2') {
      checkbox1.checked = false;
    }
  }
}

// Add this code inside your main.js file or within a script tag

// Wait for the document to finish loading
document.addEventListener('DOMContentLoaded', function() {
  // Get references to the checkbox and button elements
  var checkbox1 = document.getElementById('checkbox1');
  var checkbox2 = document.getElementById('checkbox2');
  var calculateBtn = document.querySelector('.calculate-btn');




  // Add an event listener to the checkbox
  checkbox1.addEventListener('change', function() {
    if (checkbox1.checked) {
      checkbox2.checked = false; // Uncheck checkbox2 if checkbox1 is checked
    }
  });

  // Add an event listener to the button
  calculateBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Check if checkbox1 is checked
    if (checkbox1.checked) {
      performCalculation();
    } else if (checkbox2.checked) {
      performAlternateCalculation();
    } else if (femaleRadio.checked){
      performFemaleCalculation();
    } else {
      clearResult();
    }
  });
});



// Add this code inside your main.js file or within a script tag

function performCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  // Perform the calculation

  var superk=(k+1)/(k-1);
  var omega = 0.97 * cci * a * Math.sqrt(k* p1 * c1 * (2/(k+1)) * (superk));

  var result = Math.sqrt(((4*omega)/(Math.PI*0.97*cci))/Math.sqrt(k*p1*c1*reau*(2/superk)))

  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}

function performAlternateCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  var r4 = parseFloat(document.getElementById('r4').value);
  // Perform the alternate calculation
  var const1=(2*k*p1*c1*reau)/(k-1);
  var const2=Math.pow(r4, 2 / k);
  var const3=1-Math.pow(r4, (k-1)/k);

  var omega = 0.97 * cci * a * Math.sqrt(const1*const2*(1-const3));

  var result = Math.sqrt(((4*omega)/(Math.PI*0.97*cci))/Math.sqrt(Math.sqrt(const1*const2*(1-const3))));
  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}

function clearResult() {
  // Clear the result
  document.querySelector('.calories').textContent = '0,000';
  document.querySelector('.result-message').style.display = 'none';
  document.querySelector('.error-message').style.display = 'none';
}


function performFemaleCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  
  // Perform the female calculation
  var const1=Math.sqrt(2*c1*reau*(p1-p4));
  var omega = 0.97 * cci * a * const1;
  var const2=(4*omega)/(Math.PI*0.97*cci);
  var result=Math.sqrt(const2/const1);
  // var result= const2;

  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}