function showHideActivation(option)
{
    $('.g-popup-wrapper').show();
    return;
    if (option == "oneEmail") {
        $('#oneEmailDiv').show();
        $('#twoEmailDiv').hide();
        $('#actionBtn1').css('color', '#FF3366');
        $('#actionBtn1').css('border', '1px solid #FF3366');
        $('#actionBtn2').css('color', '#3DC2FF');
        $('#actionBtn2').css('border', '1px solid #3DC2FF');
    }
    else
    {
        $('#twoEmailDiv').show();
        $('#oneEmailDiv').hide();
        $('#actionBtn2').css('color', '#FF3366');
        $('#actionBtn2').css('border', '1px solid #FF3366');
        $('#actionBtn1').css('color', '#3DC2FF');
        $('#actionBtn1').css('border', '1px solid #3DC2FF');
    }
    
}
function comprarOneEmail()
{
    console.log('asd')
    AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/4/1/1');
}
function comprarTwoEmail() {
    AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/3/1/1');
}