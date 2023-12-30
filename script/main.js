document.getElementById('btn').onclick=function () {
    const var1 = document.getElementById('var1').value;
    const var2 = document.getElementById('var2').value;
    const sum = parseInt(var1) + parseInt(var2);
    console.log(sum);

    document.getElementById('res').innerHTML="The sum of " + var1 + " and " + var2 + " is: " + sum ;
}