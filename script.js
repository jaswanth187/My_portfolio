console.log('this is working')
// let widthMatch = window.matchMedia("(max-width: 576px)");
let check = document.getElementById('check')

check.addEventListener('click',function(e){
    let ul = document.getElementById('ul')
    let head = document.getElementById('head')
    let user_img = document.getElementById('img')
    console.log('this button is clicked')
    if (user_img.style.display=='none' && head.style.display=='none'){
        user_img.style.display='block'
        head.style.display='block'
    }
    else{
        user_img.style.display='none'
        head.style.display='none'
    }
    // user_img.Visiblity = toggleButton.Ischecked ? Visiblity.Visiable : Visiblity.Collapsed;
    
})