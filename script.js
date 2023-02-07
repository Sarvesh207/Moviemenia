// console.log('hii ky bolti hai public');

var list = document.querySelector("#movie-list ul")

var addForm = document.getElementById("add-movie");

addForm.addEventListener("submit", function (e){
    // console.log(e);
    e.preventDefault();
    let value = document.getElementById("text").value;
    // console.log(value);
    // console.log('its wprking');
    let  li = document.createElement('li');
    let  movieName = document.createElement('span');
    let  deletebtn = document.createElement('span');
    li.appendChild(movieName);
    li.appendChild(deletebtn);
    list.appendChild(li);
    movieName.textContent = value;
    deletebtn.textContent = 'delete';
    movieName.classList.add('name');
    deletebtn.classList.add('delete');
});

//hide the list
var hideForm = document.getElementById("hide");
hideForm.addEventListener("click", function(){
    if(list.style.display == "none"){
        list.style.display = "block";
    }else {
        list.style.display = "none";
    }
});


//delete
list.addEventListener("click", function(e){
    // console.log(e.target.classList);
    if(e.target.classList == 'delete'){
        var li = e.target.parentElement;
        list.removeChild(li);
    }
})

//search 
// var searchForm = document.forms['search-movies[0]'];
var searchForm = document.getElementById("search-movies");
searchForm.addEventListener("keyup", function(e){
    // console.log(e.target.value.);
    let searchItem = document.querySelectorAll('li')
    console.log(searchItem);
    for( let i=0; i<searchItem.length; i++){
        if(searchItem[i].textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1){
            searchItem[i].style.display = "block";
        } else {
            searchItem[i].style.display = "none";
        }
    }
})
