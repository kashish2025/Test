var dbtn = document.querySelector('.darkMode')
var nav = document.querySelector('#nav')
var footer = document.querySelector('#footer')
var btn = document.querySelector('button')


var toggle = 1

dbtn.addEventListener('click', function(){
    if (toggle == 0){
        document.body.style.backgroundColor = "#ffffff"
        document.body.style.color = "#3a4664"
        nav.style.backgroundColor = "#ffffff"
        nav.style.dropShadow = "0px 0.1px 10px rgba(0,0,0,0.3)"
        footer.style.backgroundColor = "#3a4664"
        btn.style.backgroundColor = "#3399ff"
        btn.style.color = "white"
        dbtn.textContent = "Dark"
        toggle = 1
    }
    else{
        document.body.style.backgroundColor = "#3a4664"
        document.body.style.color = "#ffffff"
        nav.style.backgroundColor = "#3a4664"
        nav.style.dropShadow = "0px 0.1px 10px rgba(0,0,0,0.3)"
        footer.style.backgroundColor = "black"
        btn.style.backgroundColor = "#3399ff"
        btn.style.color = "white"
        dbtn.textContent = "Light"
        toggle = 0
    }
})