var x= document.getElementById("wallet");
function addmoney(){
    var money = document.getElementById("amount").value;
    
    
    x.append(money)

    localStorage.setItem("amount",JSON.stringify(money))
    console.log(money);

}