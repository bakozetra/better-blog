console.log('it works');
/*var submit = document.getElementsByClassName('btn' ,'btn-primary');
const newBlog = document.getElementById("post-list");

submit.addEventListener("click", ($event) => {
    var addNewPost = newPost();
    newBlog.appendChild(addNewPost);
    $event.preventDefault();
    document.getElementById("form").reset();
}); 
   */

const postList = document.querySelector('#post-list');
const submit = document.querySelector('#submit-form');
const titleInput = document.querySelector('#postTitle');
const contentTextarea = document.querySelector('#post-content');
const authorInput =  document.querySelector('#post-author');
const sourceInput = document.getElementsByName('#post-img');
const addPostForm = document.querySelector('#container-content');

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

 title.textContent = titleInput.value;
 content.textContent = contentTextarea.value;
 authorInput.textContent = authorInput.value;
 sourceInput.textContent = sourceInput.value;
 
 mainPost.appendChild(card);
 card.appendChild(image);
 card.appendChild(cardBody);
 cardBody.appendChild(title);
 cardBody.appendChild(content);
 cardBody.appendChild(button);
 card.appendChild(footer);

 addPostForm.appendChild(mainPost);
   $event.preventDefault();
    addPostForm.reset();
});
 