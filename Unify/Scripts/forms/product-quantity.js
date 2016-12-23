function subtractQty(qty){
    if(document.getElementById(qty).value - 1 < 0)
        return;
    else
        document.getElementById(qty).value--;
}
