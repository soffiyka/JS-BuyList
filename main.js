$(function () {
    function addProd(name) {
        if (name) {
            var count = 1;

            //product in the left column
            var $newProd = $("#newProd").clone();
            $newProd.removeAttr('id');
            $newProd.find(".for-add").text(name);
            $('.left').append($newProd);

            //clean the input
            $('.nameinput').val('');

            //statistics on the right
            var $prodLeft = $('#prodLeft').clone();
            $prodLeft.removeAttr('id');
            $prodLeft.find('.right-prodName').text(name);
            $('#leftover').append($prodLeft);


            //event on minus button
            var $minus = $newProd.find('.minBut');
            $minus.click(function () {
                count--;
                if(count==1){
                    $minus.css('background-color', 'rgba(226, 61, 61, 0.6)');
                    $minus.css('cursor', 'auto');
                }
                else if(count<1)
                    count++;
                $newProd.find('.leftamount').text(count);
                $prodLeft.find('.rightamount').text(count);

            });
            //event on plus button
            var $plus = $newProd.find('.plusbut');
            $plus.click(function(){
               count++;
               $newProd.find('.leftamount').text(count);
               $prodLeft.find('.rightamount').text(count);
               if(count>1){
                   $minus.css('background-color', 'rgb(226, 61, 61)');
                   $minus.css('cursor', 'pointer');
               }
            });
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

    //3 items have been already added
    addProd('Помідори');
    addProd('Печиво');
    addProd('Сир');

});
