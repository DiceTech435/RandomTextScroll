
// Scroll
window.addEventListener("scroll", function(){
    
    let nav = document.getElementById("nav");
    let limit = this.window.scrollY
    
    if(limit >= 192){
       nav.classList.add("fixed");
    }else{
       nav.classList.remove("fixed");
    }

});







// Toggle views
let items = document.getElementById("items");
let btn = document.getElementById("triggers");


btn.addEventListener("click", function(){

    items.classList.remove("hide");

    let fruits = ["Banana", "Mango", "Plantain", "berry", "Apple", ""];

    fruits.forEach(function(fruit, index){
       setTimeout(function(){
        items.innerHTML = fruit;

        if(index == (fruits.length-1)){
            btn.click();
            console.log("cliked");
           }

       }, index * 2000);

       
    });
});