console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


let catPicture = document.querySelector("img");

catPicture.addEventListener("mouseover", () => {
	alert("You like my cat? I like you!")
})