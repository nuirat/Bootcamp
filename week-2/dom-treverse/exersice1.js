let computer={}

$(".generator").on('click',function(){
    console.log($(this).closest('.processor').attr('id'));
    console.log($(this).closest('.computer').data().id);
    console.log($(this).closest('.computer').find('.BUS').text());
   computer['cmp_id']=$(this).closest('.computer').data().id;
})
$(".validator").on('click',function(){
    console.log($(this).closest('.computer').find('.generator').text());
    console.log($(this).closest('.computer').find('.MB').text());
    console.log($(this).closest('.computer').find('.processor').children('.QR').text());


})