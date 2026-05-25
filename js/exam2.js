//resources
//  - https://github.com/UMSIComplexWebDesign/practice3 (used my answers to the prectice exam for questions 3, 4, assistance with 5)
//  - https://www.w3schools.com/css/css_background_image.asp (used to remember the backgroundImage attribute for question 7)
//  - https://docs.google.com/presentation/d/13dim5jpkIFin-CE2pk0U2T_GUjNf5RSikwpFIbpX1SI/edit?slide=id.p28#slide=id.p28 (JavaScript slides for class to remember how to do a loop in Javascript for question 8)
//  - https://www.w3schools.com/jsreF/met_element_setattribute.asp (used for question 8 to remember how to add an html tag using javascript)

// Part 3 Question 3
window.addEventListener("load",function(){
     console.log("Evelyn");
 });


// Part 3 Question 4
document.querySelector("h1").addEventListener("click",function(){
    this.style.display = "none";
 });


// Part 3 Question 4
document.querySelector(".partA a:nth-of-type(3) img").addEventListener("mouseover",function(){
    this.style.border = "15px solid green";
 });


// Part 3 Question 6
document.querySelector(".style").addEventListener("focus",function(){
    this.style.backgroundColor = "white";
 });
document.querySelector(".style").addEventListener("blur",function(){
    this.style.backgroundColor = "bisque";
 });


// Part 3 Question 7
document.querySelector(".style2").addEventListener("focus",function(){
    document.querySelector("#maincontent").style.backgroundImage = "url('images/beach.jpg')";
 });


// Part 3 Question 8
window.addEventListener("load",function(){
     console.log("question 8");
     //add the necessary javascript to add the necessary attributes to the HTML tags for the images for lightbox 2

     // Get ALL elements with class "card"
    const lightboxLinks = document.querySelectorAll(".partA a");

    // Loop through every one
    lightboxLinks.forEach(function (lightboxLink) {
        lightboxLink.setAttribute("data-lightbox", "gallery");
    });

 });


