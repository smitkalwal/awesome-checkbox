# awesome-checkbox
Jquery plugin to replace all checkboxes with custom awesome looking checkboxes.

## Installation

Download the Zip and place it in your project folder. Include the awesome-checkbox.js and awesome-checkbox.css file in your web page.


Write your inputs and add a class for the jQuery selector:

    <input type="checkbox" class="myCheck" name="option"/>

Setup prettyCheckable for your input and you're all set:

    $('.myCheck').awesome();


You can start the plugin with the options you see on the documentation below and they will be applied to all matching inputs:

    $('.myCheck').awesome({
      color: 'red'
    });

If you want to apply something to all the inputs but you need a few specific ones to be different, you can add the specifics inline:

    <input type="checkbox" class="myCheck" value="yes" id="answer" name="answer" data-color="red" />
    
If you want to apply label to specfic input checkbox, you can add extra attribute to the inputs <b>data-label</b>, you can add the specifics inline:

    <input type="checkbox" class="myCheck" name="gender" data-color="red" data-label="Male" />    
    <input type="checkbox" class="myCheck" name="gender" data-color="red" data-label="Female" />  


