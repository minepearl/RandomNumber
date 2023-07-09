function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose(){
    let array = []
    const c = parseInt(document.getElementById("count").value)
    console.log(c)
    for(let i = c; i>0; i--){
        const a = parseInt(document.getElementById("SmallNum").value)
        const b = parseInt(document.getElementById("BigNum").value)
        var rand = random(a, b);
        array.push(rand)
    }
    console.log(array)
    array.sort()
    document.getElementById("result").innerHTML = array
}
