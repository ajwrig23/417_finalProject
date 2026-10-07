# GIT 417 Final Project

## AI Disclosure Statement
I did not use generative AI tools for this project. I used only approved course
materials, instructor examples, documentation, and my own work.

## Development Log
### Day 1
- created the HTML, CSS, and JS files.
- applied HTML Boilerplate, CSS Reset, and "use strict" respectively.
- Gathered & created images and placed in "images" directory.
- Header, body (all content except "cart"), and footer built (html) and styled (css).
- Added Day/Night button and created a javascript function to enable it.

### Day 2
- wrote function to validate form with informative error messages and return message upon successful validation.
- function also unhides "exclusive" products with valid submission.
- Built and styled "cart" element.
- wrote function to add items to cart and calculate total price with tax and shipping.
- added button to clear cart.

### Day 3
- added alert message when user clicks checkout, only triggers if cart is not empty.
- added styling for `<ul>` element in cart to negate other dark mode styles from taking effect when dark mode enabled.
- fixed price display to always show two, and only two decimal places.

## Debugging Log

### Problems 1 and 2
Had trouble getting the total price to always display two and only two decimal places and my script was crashing before even populating the subtotal cost.

### What I Tried
I first tried hard coding in ".00" with string concatenation but realized this wouldn't work for the total with taxes calculated. Which led me to finding `.toFixed()` in our zybooks material. With this knowledge I then attempted using a template literal but the value was not displaying and I was receiving an error `Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')` in the console. After checking the console error which mentioned a null value on line 165 I thought maybe a data type error was responsible for the null value so integrated `parseFloat(subTotalAmt).toFixed(2)` and was still receiving the error.

### What Fixed It
The reason for the error was actually not the string rather javascript was not reconciling the id for my subtotal cost element. I commented out the line specified in the console error and refreshed the page. The total was being populated correctly. I then googled the error and realized it was because of the id or my selector. I assigned a new id to my subtotal cost element and adjusted the js variable accordingly. I un-commented out the previous offending line and it now worked but I was still seeing total only containing only one decimal or less if the number was an integer or the tenths place was a zero. I scoured MDN for number formatting syntax add found some interesting things. When I looked back at my code I instantly noticed that `.toFixed(2)` should be inside the `parseFloat` parentheses like so `parseFloat(subTotalAmt.toFixed(2))` and lo and behold it worked. I eventually did away with the `parseFloat()` when I realized that the initial console error was a result of the id and not the data type.

### What I Learned
I realized that making assumptions about what might be causing an error without fully understanding the error message might lead to a lot more work and other errors if you start trying to troubleshoot something that is not the cause of the problem. That's where good learning happens though. I definitely learned more than I planned about number formatting than I planned on. The biggest take away for me was that its probably best to know what your error means from the get go rather than trying to guess at it. Had I just looked up the error initially I would have saved a good chunk of time.


