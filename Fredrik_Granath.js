"use strict";





var books = [

    new Book("Harry Potter","Fantasy",128,1675),
    new Book("Sherlok holmes","Detective",500,4521),
    new Book("The devil within","Horror",410,2859)
    

];



function Book (name,topic,pages,isbn){

    this.name = name;
    this.topic = topic;
    this.pages = pages;
    this.isbn = isbn;

    this.getBookInfo = function (){
        
        

        books.forEach(element => 
            console.log(
                " Book:", element.name ,"\n",
                
                "-----"                ) 
            
        )
     }; 
}


function getBooksCall(){

    var bookPrint  = new Book(); 
    bookPrint.getBookInfo();
    
}










function BookSelection(book){

    
    var div = document.getElementById("openBook2")
    
    div.innerHTML =  "Title:" + books[book].name + "<br>" +
                     "Topic:" + books[book].topic + "<br>" +
                     "Pages:" + books[book].pages + "<br>" +
                     "ISBN:" + books[book].isbn + "<br>"
    

                     
                     displayOrNot("openBook","block");
                     displayOrNot("bookCloser","block");

    

}

function closingWindow(){
    displayOrNot("openBook","none");
    displayOrNot ("bookCloser","none");
    
}








function AddBooks(){

    var booksToEnter = 0;

    while(true){

        booksToEnter = parseInt(prompt("enter number of books to add")) ;

         

        if(isNaN(booksToEnter)){
            alert("wrong input try again");
        }else{
        
            

            
            break;
        
       }
    }

    
    for(var i = 0 ; i < booksToEnter;booksToEnter--){
        var def = false;
        for(var l = 0; l<books.length;l++){

            if(books[l] == undefined){
                
                books[l] = new Book(prompt("Name:"),prompt("topic:"),prompt("Pages:"),prompt("ISBN:") );
                displayOrNot("book" +l,"block");
                def = true;
                break;
                
            }

        }
        if(def == true){
            continue;
        }

        else if ( books.length + booksToEnter -1 < 9 ){

            books.push(new Book(prompt("Name:"),prompt("topic:"),prompt("Pages:"),prompt("ISBN:") ));
        
            var checking = books.length -1;
            var checkingToString = "book" + checking;
            
            displayOrNot(checkingToString,"block");
            
        }else{
            alert("to many books maximum you can add is " + (9-books.length))
            break;
        }

    }

}




function RemoveBooks(){
    var bookToRemove = prompt("enter the name of the book to remove 'case sensetive'")
    for (var i = 0; i < books.length; i++){
        if(books[i] == undefined){

            continue;
        }
        if (books[i].name == bookToRemove){
            
            delete books[i];
            displayOrNot("book" + i,"none");
            
        }
    }
}




function displayOrNot(elementName,choice){
    document.getElementById(elementName).style.display = choice;
}
























