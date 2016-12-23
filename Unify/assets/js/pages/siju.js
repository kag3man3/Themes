function showHideActivation(option)
{
    if (option == "oneEmail") {
        $('#oneEmailDiv').show();
        $('#twoEmailDiv').hide();
        $('#actionBtn1').css('color', '#41B5A7');
        $('#actionBtn1').css('border', '1px solid #41B5A7');
        $('#actionBtn2').css('color', '#11c1ff');
        $('#actionBtn2').css('border', '1px solid #11c1ff');
    }
    else
    {
        $('#twoEmailDiv').show();
        $('#oneEmailDiv').hide();
        $('#actionBtn2').css('color', '#41B5A7');
        $('#actionBtn2').css('border', '1px solid #41B5A7');
        $('#actionBtn1').css('color', '#11c1ff');
        $('#actionBtn1').css('border', '1px solid #11c1ff');
    }
    
}
function comprarOneEmail()
{
    console.log('asd')
    AjaxCart.addproducttocart_catalog('/desplige/addproducttocart/catalog/4/1/1');
}
function comprarTwoEmail() {
    AjaxCart.addproducttocart_catalog('/desplige/addproducttocart/catalog/3/1/1');
}