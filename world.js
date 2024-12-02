window.onload = ()=>{
    var btn = document.getElementById("lookup");
    console.log(btn);
    var request;
    var btnTwo = document.getElementById("lookupC");
    
    btn.addEventListener("click", function(ele)
    {
        ele.preventDefault();
        const request = new XMLHttpRequest();
        var search = document.getElementById("country").value;
        console.log(search);
        var url = "http://localhost/info2180-lab5/world.php?country="+search;
    
        request.onreadystatechange = function ()
        {
            if (this.readyState === XMLHttpRequest.DONE)
            {
            if (request.status ===200)
            {
            var respnse = request.responseText;
            var holder = document.querySelector("#result").innerHTML = respnse;
            console.log(document.getElementById("result"));
    
            }
    
    
            }
        }
        request.open('Get', url);
        request.send();
    })
    
    btnTwo.addEventListener("click", function (ele){
            ele.preventDefault();
            console.log("lookup for city clicked");
            const re = new XMLHttpRequest();
            search = document.getElementById("country").value;
            console.log(search);
    
            re.onreadystatechange=function(){
                if(this.readyState === XMLHttpRequest.DONE && re.status === 200){
                    document.getElementById("result").innerHTML = re.responseText;
                }
            }
            re.open("GET", "http://localhost/info2180-lab5/world.php?country="+search+"&x=cities");
            re.send(); 
            
        })
    
    
    }