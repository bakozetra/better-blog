console.log('it works');
const postList = document.querySelector('#post-list');
const submit = document.querySelector('#submit-form');
const titleInput = document.querySelector('#postTitle');
const contentTextarea = document.querySelector('#post-content');
const authorInput =  document.querySelector('#post-author');
const sourceInput = document.querySelector('#post-img');
const addPostForm = document.querySelector('#post-form');
const errorMessage = document.querySelector("#error-message");

submit.addEventListener('click' , ($event) => {
const mainPost = document.createElement("div");
 mainPost.classList.add("offset-2" ,"col-8");

 const card = document.createElement("div");
 card.classList.add("card");

 const image = document.createElement("img");
 image.setAttribute('src', `https://picsum.photos/500/200`);
 image.classList.add("card-img-top");
 image.alt = "Card image cap";

 const cardBody = document.createElement("div");
 cardBody.classList.add("card-body");

 const title = document.createElement("h5");
 title.classList.add("card-title");


 const content = document.createElement("p");
 content.classList.add("card-text");

 const button = document.createElement("button");
 button.classList.add("btn", "btn-sm","btn-light","btn-delete");

 const footer = document.createElement("div");
 footer.classList.add("card-footer" ,"text-muted");

 title.textContent = titleInput.value + authorInput.value;
 content.textContent = contentTextarea.value;
 button.textContent = "delete entry";
 
 mainPost.appendChild(card);
 card.appendChild(image);
 card.appendChild(cardBody);
 cardBody.appendChild(title);
 cardBody.appendChild(content);
 cardBody.appendChild(button);
 card.appendChild(footer);
postList.insertAdjacentElement("beforebegin", mainPost);
   $event.preventDefault();
    addPostForm.reset();
});



contentTextarea.addEventListener("input", ($event) =>{
    if($event.target.value.length < 20) {
        contentTextarea.classList.add("is-invalid");
        errorMessage.style.display = "block";
    }
    else {
        contentTextarea.classList.remove("is-invalid");
        errorMessage.style.display = "none";
    }

});
 