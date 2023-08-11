function divide(a, b) {
    if (b == 0) { return 0 }
    else { return a/b };
}

function multiply(a, b) {
    return a*b;
}

let drop = document.getElementById("orin");
let ovr = document.getElementById("ovr");
let zx1  = document.getElementById("ZX1");
let zx2  = document.getElementById("ZX2");
let xz   = document.getElementById("XZ");
let btn  = document.getElementById("calcBtn");
let res  = document.getElementById("result");

drop.addEventListener("click", () => {

    if (drop.value == "Z") {
        zx1.setAttribute("placeholder", "Z1")
        zx2.setAttribute("placeholder", "Z2")
        xz.setAttribute("placeholder", "X")
    }
    else {
        zx1.setAttribute("placeholder", "X1")
        zx2.setAttribute("placeholder", "X2")
        xz.setAttribute("placeholder", "Z")
    }
});

btn.addEventListener("click", () => {
    
    if (ovr.checked) {
        if (drop.value == "Z") {
            res.innerHTML = "Z1: " + math.floor(divide(zx1.value, 8)) + "<br /><br />Z2: " + math.ceiling(divide(zx1.value, 8)) + "<br /><br />X: " + divide(xz.value, 8);
        }
        else {
            res.innerHTML = "X1: " + math.floor(divide(zx1.value, 8)) + "<br /><br />X2: " + math.ceiling(divide(zx1.value, 8)) + "<br /><br />Z: " + divide(xz.value, 8);
        }
    }
    else {
        if (drop.value == "Z") {
            res.innerHTML = "Z1: " + multiply(zx1.value, 8) + "<br /><br />Z2: " + multiply(zx1.value, 8) + "<br /><br />X: " + multiply(xz.value, 8);
        }
        else {
            res.innerHTML = "X1: " + multiply(zx1.value, 8) + "<br /><br />X2: " + multiply(zx1.value, 8) + "<br /><br />Z: " + multiply(xz.value, 8);
        }
    }

});
