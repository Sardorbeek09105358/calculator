
const TotalNumber = () => {
    let num1 = +document.getElementById("ason").value
    let num2 = +document.getElementById("bson").value
    let amal = document.getElementById('amal').value
    
    let result = null;

    if(amal === "-"){
        result = num1 - num2
    } else if(amal === "+"){
        result = num1 + num2
    } else if(amal === "*"){
        result = num1 * num2
    } else if(amal === "/"){
        result = num1 / num2
    } else {
        alert("Amal xato boshqa son kirit")
    }
    document.getElementById("result").innerText = result;
}


















