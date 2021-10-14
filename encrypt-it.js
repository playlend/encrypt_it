(function() {
  "use strict";

  window.addEventListener("load", init);  

  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    
    /** Selecting elements in DOM */
    const encryptButton = document.querySelector('#encrypt-it');
    const textAreaInput = document.querySelector('#input-text');
    const result = document.querySelector('#result');
    const resetButton = document.querySelector('#reset');
    const allCapsCheckBox = document.querySelector('#all-caps');
    const size14 = document.querySelector('#size14');
    const size24 = document.querySelector('#size24');

    /** Function that provides output when button is clicked */
    function encryptText() {
      let inputStr = textAreaInput.value;
      let outputStr = "";
      
      for(let i in inputStr) {
        if((inputStr.charCodeAt(i) > 96 && inputStr.charCodeAt(i) < 122) || (inputStr.charCodeAt(i) > 64 && inputStr.charCodeAt(i) < 90)) {
          outputStr = outputStr.concat(String.fromCharCode(inputStr.charCodeAt(i) + 1));
        } 
        else if(inputStr.charCodeAt(i) == 122) {
          outputStr = outputStr.concat(String.fromCharCode(97));
        }
        else if(inputStr.charCodeAt(i) == 90)
        {
          outputStr = outputStr.concat(String.fromCharCode(65));
        }
        else {
          outputStr = outputStr.concat(String.fromCharCode(inputStr.charCodeAt(i)));
        }

        result.textContent = outputStr;
      }
   }
    
    /** Adding click event handler to the encrypt it button */
    encryptButton.addEventListener('click', () => {
      encryptText();
    });   

    /** Event handler for reset button */
    resetButton.addEventListener('click', () => {
      textAreaInput.value = "";
      result.textContent = "";
    });

    /** All caps option */
    allCapsCheckBox.addEventListener('change', function() {
      if(this.checked) {
        textAreaInput.value = textAreaInput.value.toUpperCase();
        result.textContent = result.textContent.toUpperCase();
      } else {
        textAreaInput.value = textAreaInput.value.toLowerCase();
        result.textContent = result.textContent.toLowerCase();
      }
    });

    /** Changing size of the font based on user selection */
    size14.addEventListener('change', () => {
      textAreaInput.style.fontSize = "14pt";
      result.style.fontSize = "14pt";
    })

    size24.addEventListener('change', () => {
      textAreaInput.style.fontSize = "24pt";
      result.style.fontSize = "24pt";
    })
  }

})();

