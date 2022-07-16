$('button').on('click',function(){
    console.log($("#in").val());
    $.ajax(
        
        {
        method: "GET",
        
        url:  `https://api.giphy.com/v1/gifs/search?api_key=908p7K4A4oAw7WVG1ufmh3GZHEx5Sdvu&q=${$("#in").val()}&limit=25&offset=0&rating=g&lang=en`,
        success: function (data) {
            
            $("body").append(`<iframe src = ${data.data[0].embed_url}> </iframe>`)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
})