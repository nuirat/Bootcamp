$.get('/randomWord')
    .then(function (word) {
        let synonymsPromise = $.get(`/synonyms/${word}`)
        let sentimentPromise = $.get(`/sentiment/${word}`)
        Promise.all([synonymsPromise, sentimentPromise])
            .then(function (results) {
                console.log(results)
            })
    }) 