//your JS code here. If required.
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const isbnInput = document.getElementById("isbn");
const submitButton = document.getElementById("submit");
const bookList = document.getElementById("book-list");

submitButton.addEventListener("click", function(event){
	event.preventDefault();
	
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
	
	if( title==="" || author ==="" || isbn==="" ){
		alert("Kindly fill all the details");
		return;
	}
	
const row  = document.createElement("tr"); //create row 

// insert column //
	row.innerHTML  = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		 <td><button class="delete">X</button></td>
	`;

		 bookList.appendChild(row);

		titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

const deleteButton = row.querySelector(".delete");
deleteButton.addEventListener("click", function(){
	row.remove();
	});
});

