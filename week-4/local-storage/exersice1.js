let text=''
i=0
let wisdom=JSON.parse(localStorage.wisdom || "[]" )
wisdom.forEach(element => {
    $('body').append(`<div ><span>x</span><div data-id=${i}>${element.text}</div></div>`)
    i++

});
$('#b1').on('click',function(){
    console.log($('#i1').val());
    wisdom.push({'text':($('#i1')).val()+' '})
    $('#p1').html($('#i1').val())
    if(wisdom.length%2==0)
    localStorage['wisdom']=JSON.stringify(wisdom)
})
$('#clear').on('click',function(){
   localStorage.clear()
})
$('body').on('click','span',function(){
   deleteId= $(this).closest('div').find('div').data().id
   wisdom =JSON.parse(localStorage.wisdom)
   console.log($(this).closest('div').find('div').text());
 wisdom=  wisdom.filter((element)=>element.text!=wisdom[deleteId]['text'])
 localStorage.clear()
 localStorage['wisdom']=JSON.stringify(wisdom)

})
