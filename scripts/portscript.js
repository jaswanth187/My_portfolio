let check = document.getElementById('check')
console.log('this is port page')
check.addEventListener('click',function(e){
    let port_list = document.getElementById('portlist')
    console.log('this is clicked')
    if (port_list.style.display=='none'){
        port_list.style.display=  'block'
    }
    else{
        port_list.style.display='none'
    }
    
})