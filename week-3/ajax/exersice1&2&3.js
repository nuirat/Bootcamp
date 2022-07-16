const fetch = function (type,data) {
    if(type == "isbn")
    url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${data}`
    else 
        url =`https://www.googleapis.com/books/v1/volumes?q=title:${data}`
    console.log(url)
    $.ajax({
        method: "GET",
        
        url:  url,
        success: function (data) {
            console.log(data)
           for (book of data.items)
           { 
            console.log(book.volumeInfo.title)
            console.log(book.volumeInfo.authors)
        }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("data","Of Mice and Men by John Steinbeck")