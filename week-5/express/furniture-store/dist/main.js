const fetchPrice = function () {
    let input = $("#team").val()

    $.get(`teams/${input}`, function (item) {
        $("body").append(`<div>${item[0].name} - ${item[0].price}`)
    })
   
} 
