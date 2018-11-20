window.onload= function(){
    
    let url = 'https://lab-7-shyloh.c9users.io/world.php/world.php?all';
    let search = document.getElementById('Search');
    let check = document.getElementById('checkbox');
    check.checked = false;
    
    search.addEventListener("click", laugh);
    
    function laugh(){
        let name=document.getElementById('country').value;
        check.checked;
        let xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState=== 4 && xhttp.status===200){
                let info=document.getElementById('result');
                let response = xhttp.response;
                info.innerHTML=response;
                document.getElementById('checkbox').checked=false;
            }
        } ;
        xhttp.open('GET','world.php?country='+name+'&checkbox='+check,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
    }
    check.addEventListener("click", function(){
        check.checked = true;
        let name=document.getElementById('country').value;
        check.checked;
        let xhttp=new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState=== 4 && xhttp.status===200){
                let info=document.getElementById('result');
                let response = xhttp.response;
                info.innerHTML=response;
                document.getElementById('checkbox').checked=false;
            }
        } ;
        xhttp.open('GET',url+name+'&checkbox='+check,true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
        
    });
    
};