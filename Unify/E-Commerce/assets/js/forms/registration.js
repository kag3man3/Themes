function setEmail()
{
    $('#Email').val($('#emailSiju').val() + '@siju.es');
    if ($('#emailSiju').val()!='')
        searchUserSiju($('#emailSiju').val());

}
function callOtherDomain() {
    if (invocation) {
        invocation.open('POST', url, true);
        invocation.setRequestHeader('X-PINGOTHER', 'pingpong');
        invocation.setRequestHeader('Content-Type', 'application/xml');
        invocation.onreadystatechange = handler;
        invocation.send(body);
    }
}
function searchUserSiju(user) {
    $.ajax({
        url: 'http://192.168.65.200/WebSiteSiju/Service2.svc/searchUserSiju/' + user,
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (data) {
            if (data == '1') {
                $('#userStatus').css("color", "red");
            }
            else {
                $('#userStatus').css("color", "blue");
            }
        },
        error: function (jqXHR, status, error) {
            alert('Disculpe, hay problemas de conexión a la bd');
        }
    });
}
