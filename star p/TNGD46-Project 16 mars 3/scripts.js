/*
    Filename: scripts.js
    Description: Web Mini Project (Lab 3).
    Course Code: TNGD46-2026VT
    Institution: Linköping University
*/

/* === EVENT: DOMContentLoaded =============================================== */
// manually added "listener" for the standardized "DOMContentLoaded" event, which is AUTOMATICALLY called
// once the initial loading of the web page has been completed (.html file is completely parsed) 
document.addEventListener("DOMContentLoaded", function () {
    console.log("HTML DOM tree loaded, and ready for manipulation.");

    // HERE: only add those functions and logic for your "interactive website" that 
    // you would like to AUTOMATICALLY call without the need for additional user input

});

/* ADD YOUR JAVASCRIPT IMPLEMENTATION HERE */


function confirmBox() { 


        let BrowniePrice = 50;
        let BrownieCount = document.getElementById("BrownieCount").value;
        console.log(BrownieCount);
        let KolakakaPrice = 50;
        let KolakakaCount = document.getElementById("KolakakaCount").value;
        let totalPrice = (BrowniePrice * BrownieCount) + (KolakakaPrice * KolakakaCount);

    const confirmResult = confirm("Din beställning kommer kosta " + totalPrice + " SEK. Vill du lägga beställningen?");

    if (confirmResult == true) {
        console.log("The user selected OK.");
    } else {
        console.log("The user selected Cancel.")
        console.log(confirmResult);
        console.log(typeof (confirmResult));
    }
}





