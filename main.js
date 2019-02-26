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

            var $boughtProd = $('#boughtProd').clone();
            $boughtProd.removeAttr('id');
            $boughtProd.find('.itemName').text(name);
            $('#crossedProd').append($boughtProd);


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
                $boughtProd.find('.rightamount').text(count);

            });
            //event on plus button
            var $plus = $newProd.find('.plusbut');
            $plus.click(function(){
               count++;
               $newProd.find('.leftamount').text(count);
               $prodLeft.find('.rightamount').text(count);
                $boughtProd.find('.rightamount').text(count);
               if(count>1){
                   $minus.css('background-color', 'rgb(226, 61, 61)');
                   $minus.css('cursor', 'pointer');
               }
            });

            //event on del button
            var $del =$newProd.find('.delbut');
            if($del){
              $del.click(function () {
                  $newProd.remove();
                  $prodLeft.remove();
                  $boughtProd.remove();
              });
            }

            //event on the bought button
            var boughtButCount = 1;
            var $boughtBut = $newProd.find('.boughtbut');
            if($boughtBut){
                $boughtBut.click(function () {
                    if(boughtButCount) {
                        $newProd.find(".for-add").css('text-decoration', 'line-through');
                        $minus.css('display', 'none');
                        $plus.css('display', 'none');
                        $del.css('display', 'none');
                        $boughtBut.text('Не куплено');
                        $boughtProd.css('display', 'inline-block');
                        $boughtProd.find('.rightamount').css('display', 'inline-block');
                        $prodLeft.css('display', 'none');
                        boughtButCount--;
                    }
                    else{
                        $newProd.find(".for-add").css('text-decoration', 'none');
                        $minus.css('display', 'inline-block');
                        $plus.css('display', 'inline-block');
                        $del.css('display', 'inline-block');
                        $boughtBut.text('Куплено');
                        $boughtProd.css('display', 'none');
                        $prodLeft.css('display', 'inline-block');
                        boughtButCount++;
                    }
                });
            }
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
