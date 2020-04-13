(function(){
    getBooks();
})();

function getBooks(){
    fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        else{
            return Promise.reject({status : response.status, statusText : response.statusText});
        }
    })
    .then(books => {
        let content = "";
        books.forEach(function(book, i) {
            content += `
            <tr>
                <td scope="row">${i + 1}</td>
                <td>${book.isbn}</td>
                <td>${book.title}</td>
                <td>${book.overdueFee}</td>
                <td>${book.publisher}</td>
                <td>${book.datePublished}</td>
            </tr>
            `;

            // document.getElementById("bookTable").append("<tr><td>" + i +  "</td><td>" +
            // book.isbn + "</td><td>" + book.title + "</td><td>" + book.overdueFee + "</td><td>" + book.publisher + 
            // "</td><td>" + book.datePublished + "</td></tr>");
        });
        document.querySelector("#tbody").innerHTML = content;

    })
    .catch(err => {
        console.log(err);
        document.getElementById("divBooksList").innerHTML = "<p style='color:deepink'></p>"
    });
}