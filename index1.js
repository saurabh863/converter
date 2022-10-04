"use strict";
function convert(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    var fromValue=document.getElementById("frominput").value;
    // document.getElementById("frominput").addEventListener("keypress",(e)=>{
    //     if(e<from && e>=0){   
    //     }
    //     else{
    //         alert(`enter value less than ${from}`);
    //         document.getElementById("frominput").value=fromValue.slice(0,-1);
    //     }        
    // });
    var toValue = (fromValue,from,to)=>{
    return parseInt(fromValue,from).toString(to);
}
    var result=toValue(fromValue,from,to);
    
    if(isNaN(result)){
        alert("please enter a number to convert");
        document.getElementById("frominput").value="";
       
    }
    else{
        console.log(result);
        document.getElementById("toinput").innerHTML=result;
        document.getElementById("result").style.display="block";
        document.getElementById("frominput").value="";
        
    }
    

    
    
}
function swap(){
    var from=document.getElementById("from").value;
    var to=document.getElementById("to").value;
    let temp=from;
    from=to;
    to=temp;
    document.getElementById("from").value=from;
    document.getElementById("to").value=to;
}
// document.getElementById("frominput").addEventListener("keypress",(e)=>{
//     if(e.key<from && e.key>=0){   
//     }
//     else{
//         alert(`enter value less than ${from}`);
//         document.getElementById("frominput").value=fromValue.slice(0,-1);
//     }        
// });


