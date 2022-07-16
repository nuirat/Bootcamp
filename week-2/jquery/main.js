list =['mohammed','fouaz','messi']
i=0
$('button').on('click',function (){
$('ul').append('<li>'+list[i]);
i++;
if(i>2)
i=0
});
$('ul').on('click','li',function(){
$(this).remove()
	
})


