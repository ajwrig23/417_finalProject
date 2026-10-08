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

### Day 4
- added thousands separator formatter.
- cleaned and commented javascript code.
- adjusted and finalized styles for cart.

## Debugging Log

### Problems 1 and 2
Had trouble getting the total price to always display two and only two decimal places and my script was crashing before even populating the subtotal cost.

#### What I Tried
I first tried hard coding in ".00" with string concatenation but realized this wouldn't work for the total with taxes calculated. Which led me to finding `.toFixed()` in our zybooks material. With this knowledge I then attempted using a template literal but the value was not displaying and I was receiving an error `Uncaught TypeError: Cannot set properties of null (setting 'innerHTML')` in the console. After checking the console error which mentioned a null value on line 165 I thought maybe a data type error was responsible for the null value so integrated `parseFloat(subTotalAmt).toFixed(2)` and was still receiving the error.

#### What Fixed It
The reason for the error was actually not the string rather javascript was not reconciling the id for my subtotal cost element. I commented out the line specified in the console error and refreshed the page. The total was being populated correctly. I then googled the error and realized it was because of the id or my selector. I assigned a new id to my subtotal cost element and adjusted the js variable accordingly. I un-commented out the previous offending line and it now worked but I was still seeing total only containing only one decimal or less if the number was an integer or the tenths place was a zero. I scoured MDN for number formatting syntax add found some interesting things. When I looked back at my code I instantly noticed that `.toFixed(2)` should be inside the `parseFloat` parentheses like so `parseFloat(subTotalAmt.toFixed(2))` and lo and behold it worked. I eventually did away with the `parseFloat()` when I realized that the initial console error was a result of the id and not the data type.

#### What I Learned
I realized that making assumptions about what might be causing an error without fully understanding the error message might lead to a lot more work and other errors if you start trying to troubleshoot something that is not the cause of the problem. That's where good learning happens though. I definitely learned more about number formatting than I planned on. The biggest take away for me was that its probably best to know what your error means from the get go rather than trying to guess at it. Had I just looked up the error initially I would have saved a good chunk of time. I still don't know why my script was not seeing the initial element, I was using `.getElementById()` and both the html and js matched. Worked fine with a new value though.

### Problem 3
Once incorporated `.toLocaleString()` into my price output strings it wouldn't work, no thousands separators were being shown.

#### What I Tried
At first I thought maybe the `.toFixed(2)` method was overriding the `.toLocaleString()`method so I moved it to the end of `.toLocaleString`. That didn't work. I then figured that maybe it had something to do with the fact that I was calculating inline in a concatenated string so I set a variable for the subtotal and totals equal to  `variable.toFixed(2)` and then applied the `.toLocaleString()` to that variable in the concatenated string. Still no luck. I then created a function that returned the input with `.toLocaleString()` applied and tried that with the new variables, still nothing.

#### What Fixed it
I went back to the documentation and read more, learning about the options parameter in the process. I studied the available options and realized that I could potentially format the `.toLocaleString()` method with not only the locale but I could also specify minimum and maximum fraction digits. I removed the `.toFixed()` variables and fed them to the function I created just for applying `.toLocaleString()` which was set to return this `x.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2})`. I refreshed my webpage and added a few items to the cart and there were commas in my number with two and only two decimal places! I applied that function to all my strings that had a price in them and they all accepted it without a fuss.

#### What I Learned
I think the biggest thing I learned here was that it is worth it to take the time to fully read the documentation for something before using it. I could have saved some time and heartache had I read about the parameters initially rather than just seeing the example code and giving that a whirl. Also, it seems that the options available to that options parameter apply to wide variety of the Number methods. It definitely ended up feeling more eloquent than my initial caveman approach of formatting through blunt force. Furthermore, had I tried figuring this out before getting my two decimals showing (Problem 1) I probably would've not had that problem!
