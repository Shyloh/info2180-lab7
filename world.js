window.onload= function(){
    
    let coun = document.getElementById("country");
    let look = document.getElementById("lookup");
    let result= document.getElementById("result");
    let search = document.getElementById('Search');
    
    look.addEventListener("click", fun);
    search.addEventListener("click", laugh);
    
    function laugh(){
        let httpR = new XMLHttpRequest();
        let url = "https://lab-7-shyloh.c9users.io/world.php/world.php?country=Jamaica";
        httpR.onreadystatechange = function(){
            if (httpR.readyState===4 && httpR.status===200){
                let response =(httpR.responseText);
                result.innerHTML = response;
                alert (response);
                }
            };
            httpR.open("GET", url);
            httpR.send();
    }
    function fun(){
        
    }
    

};   
