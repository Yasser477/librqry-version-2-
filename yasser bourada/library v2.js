var inputs = document.getElementsByTagName('input');
var button = document.getElementById('btn');
var select = document.getElementById('lng');
var radio = document.getElementsByName('types');

class Book {
    constructor(title,author,price,date,language,type){
       this.title =   title;
       this.author = author;
       this.price = price;
       this.date = date;
       this.language = language;
       this.type = type;


    } 
     
  bookDetails()


  
  {
      return "the name of the book is  "+this.title+"the author of the book is"+this.author+ "book is a "+this.type+"the price is"+this.price+"the date of publication"+this.date+"the language of the book is"+this.language+"the type of the book is a"+this.type;
  }
}

var books=[];
var table = document.querySelector("table>tbody");
var validation=0;

function validate(){
  for(i=0; i<inputs.length;i++){
      if(inputs[i].value==''){
        inputs[i].nextElementSibling.innerHTML = "This fieled required";
        inputs[i].nextElementSibling.style.color = "red";
          validation ++;
      }
      else{
        inputs[i].nextElementSibling.innerHTML ="well";
        inputs[i].nextElementSibling.style.color="green";
        inputs[i].style.borderColor="green";
      }
    }
      //bookname validation
      if(inputs[0].value.length>30){
        inputs[0].nextElementSibling.innerHTML="the name should be less than 30 letter"
        inputs[0].nextElementSibling.style.color="red"
      }

      //author validation

      if(inputs[1].value.length>20){
        inputs[1].nextElementSibling.innerHTML="the name should be less than 20 letter"
        inputs[1].nextElementSibling.style.color="red"
      }
      //price validation

      var reg_price = /^[0-9]+((.[0-9]{2})|())$/;
      
      if(reg_price.test(inputs[2].value)){
        inputs[2].nextElementSibling.innerHTML="enter the price with number"
        inputs[2].nextElementSibling.style.color="red"
      }
      else{
        inputs[2].nextElementSibling.innerHTML="WELL"
        inputs[2].nextElementSibling.style.color="GREEN"
      }


     // if(isNaN(Number(inputs[2].value))){

       // inputs[2].nextElementSibling.innerHTML="enter the price with number"
      //  inputs[2].nextElementSibling.style.color="red"  
     // }
      //else if (Number(inputs[2].value<0)){
       // inputs[2].nextElementSibling.innerHTML="positive number"
        //inputs[2].nextElementSibling.style.color="red" 
      //}
      // }
  


}

function add(){
  validate();
      
  let bk=new Book(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,select.value,radio.value);
     books.push(bk);
  
  var tr = document.createElement("tr")
  tr.innerHTML = `<td>${bk.title}</td>
  <td>${bk.author}</td>
  <td>${bk.price}</td>
  <td>${bk.date}</td>
  <td>${bk.language}</td>
  <td>${bk.type}</td>
  `
  
  table.appendChild(tr);
 
}