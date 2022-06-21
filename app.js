
class Book{
    constructor(title,author,bpy){
        this.title=title;
        this.author=author;
        this.bpy=bpy;
    }   
}

 function add(book){
        const list=document.getElementById("book_list");
        const row=document.createElement("tr");
        row.innerHTML=
        `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.bpy}</td>
        <td class="delete">X</td>`;

        list.appendChild(row)
 
}

    //*showAlert
    function showAlert(msg,error){
      const div=document.createElement("div");
      div.style.color="white"
      div.className=`alert ${error}`
      div.appendChild(document.createTextNode (msg));

      const container=document.querySelector(".container");
      const form=document.getElementById("book-form");

      //* insert Alert
      container.insertBefore(div,form)

      //*settimeout

      setTimeout(function(){
        document.querySelector(".alert").remove()

      },3000)
    }


    //* delete 
      function deleteBook(target){
        if(target.className=="delete"){
          target.parentElement.remove()
        }
      }


  
    //*clearFields
    
  function clearField(){
    const title=document.getElementById("title").value="";
    const author=document.getElementById("author").value="";
    const bpy=document.getElementById("bpy").value="";
    }
  


  //* Event Listener

  document.getElementById("book-form").addEventListener("submit",function(e){
    console.log("tıklandı");
    e.preventDefault();
   const title=document.getElementById("title").value;
   const author=document.getElementById("author").value;
   const bpy=document.getElementById("bpy").value;
   
   //*instance book
   const book = new Book(title,author,bpy)

   //console.log(book);

    if(!(title||author||bpy)){
      
    
   showAlert("Please make a data entry","error")
     }
     else{

     add(book)
     showAlert("Book Added","success")
     clearField()
  
     }
  })
document.querySelector("#book_list").addEventListener("click",function(e){
  deleteBook(e.target)
  showAlert("Book Removed","success")
})
