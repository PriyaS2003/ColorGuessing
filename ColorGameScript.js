alert("CONNECTED AS FUCK!") ;
var num = 6 ;
var colors = generateRandomColors(num) ;

var squares = document.querySelectorAll(".square") ;
var color_picked = pickColor() ;
var head = document.querySelector("#head_rgb") ;
var head_color = document.querySelector(".jumbotron") ;
var message = document.querySelector("#message") ;
var reset = document.querySelector("#reset") ;
var easybtn = document.querySelector("#easybtn") ;
var hardbtn = document.querySelector("#hardbtn") ;

easybtn.addEventListener("click", function() {
    easybtn.classList.add("selected") ;
    hardbtn.classList.remove("selected") ;
    num = 3 ;
    reset.textContent = "NEW COLORS" ;
    colors = generateRandomColors(num) ;
    color_picked = pickColor() ;
    head.textContent = color_picked ;
    for(var i=0 ; i<squares.length ; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i] ;
        }
        else {
            squares[i].style.background = "none" ;
        }
    }
    head_color.style.background = "black" ;
    message.textContent = "Guess the Color." ;
}) ;
hardbtn.addEventListener("click", function() {
    hardbtn.classList.add("selected") ;
    easybtn.classList.remove("selected") ;
    num = 6 ;
    reset.textContent = "NEW COLORS" ;
    colors = generateRandomColors(num) ;
    color_picked = pickColor() ;
    head.textContent = color_picked ;
    for(var i=0 ; i<squares.length ; i++) {
        squares[i].style.background = colors[i] ;
    }
    head_color.style.background = "black" ;
    message.textContent = "Guess the Color." ;
}) ;

head.textContent = color_picked ;

reset.addEventListener("click", function() {
    reset.textContent = "NEW COLORS" ;
    //new colors
    colors = generateRandomColors(num) ;
    //new pick color
    color_picked = pickColor() ;
    //change head color
    head.textContent = color_picked ;
    //change colors of squares
    for(var i=0 ; i<squares.length ; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i] ;
        }
        else {
            squares[i].style.background = "none" ;
        }
    }
    //change head color
    head_color.style.background = "black" ;
    message.textContent = "Guess the Color." ;
}) ;

for(var i=0 ; i<squares.length ; i++) {
    squares[i].style.background = colors[i] ;
    
    squares[i].addEventListener("click", function() {
        var color_click = this.style.background.toUpperCase() ;
        if(color_click === color_picked) {
            for(var j=0 ; j<squares.length ; j++) {
                squares[j].style.background = this.style.background ;
            }
            head_color.style.background = this.style.background ;
            message.textContent = "Correct !!!" ;
            reset.textContent = "PLAY AGAIN?" ;
        }
        else {
            this.style.background = "black" ;
            message.textContent = "Try Again!" ;
        }
    }) ;
}

function pickColor() {
    var ran = Math.floor(Math.random()*colors.length) ;
    console.log(ran) ;
    return colors[ran] ;
}   

function generateRandomColors(num) {
    var arr = [] ;
    for( var i=0 ; i<num ; i++) {
        arr[i] = randomColors() ;
    }
    return arr ;
}

function randomColors() {
    //r
    var r = Math.floor(Math.random()*256) ;
    //g
    var g = Math.floor(Math.random()*256) ;
    //b
    var b = Math.floor(Math.random()*256) ;
    return "RGB(" + r + ", " + g + ", " + b + ")" ;
}