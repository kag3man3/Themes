function enviarEmail()
{
    name = $('#name').val();
    email = $('#email').val();
    message = $('#message').val();
    $.ajax({
        url: 'http://localhost:64736/Service2.svc/sendMailSijuSiju/'+name+'-'+email+'-'+message,
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            alert("Email enviado");
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, hay problemas de conexión a la bd');
        }
    });
}

function showHideActivation(option)
{
    if (isLogin()) {
        $.ajax({
            url: '../../addproducttocart/catalog/4/1/1/',
            type: 'POST',
            dataType: 'json',
            success: function (datos) {
                location.href = "./../checkout"
            },
            error: function (jqXHR, status, error) {
                alert('Disculpe, hay problemas de conexión a la bd');
            }
        });
    }
    else
    {
        location.href = "./login";
    }

    //if (option == "oneEmail") {
    //    $('#oneEmailDiv').show();
    //    $('#twoEmailDiv').hide();
    //    $('#actionBtn1').css('color', '#FF3366');
    //    $('#actionBtn1').css('border', '1px solid #FF3366');
    //    $('#actionBtn2').css('color', '#3DC2FF');
    //    $('#actionBtn2').css('border', '1px solid #3DC2FF');
    //}
    //else
    //{
    //    $('#twoEmailDiv').show();
    //    $('#oneEmailDiv').hide();
    //    $('#actionBtn2').css('color', '#FF3366');
    //    $('#actionBtn2').css('border', '1px solid #FF3366');
    //    $('#actionBtn1').css('color', '#3DC2FF');
    //    $('#actionBtn1').css('border', '1px solid #3DC2FF');
    //}
}
function createUserSijuEmail()
{
    $.ajax({
        url: 'http://192.168.65.200/Service2.svc/createUserSiju/okok',
        type: 'POST',
        dataType: 'json',
        success: function (data) {
            alert("User creado");
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, hay problemas de conexión a la bd');
        }
    });
}
//function comprarTwoEmail() {
//    AjaxCart.addproducttocart_catalog('/addproducttocart/catalog/3/1/1');
//}