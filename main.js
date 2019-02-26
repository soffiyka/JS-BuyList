$(function () {
    function addProd(name) {
        if (name) {
            //product in the left column
            var $newProd = $("#newProd").clone();
            $newProd.removeAttr('id');
            $newProd.find(".for-add").text(name);
            $('.left').append($newProd);


            //clean the input
            $('.nameinput').val('');
        }
    }

    //event on adding button
    $("#toListBut").click(function () {
        var prodName = $(".nameinput").val();
        addProd(prodName);
    });

    //sensitiveness to enter-key
    $('.nameinput').keypress(function (e) {
        if (e.which == 13) {
            var prodName = $('.nameinput').val();
            addProd(prodName);
        }
    });

    //3 items have already been added
    addProd('Помідори');
    addProd('Печиво');
    addProd('Сир');
});
