document.querySelector('form').addEventListener('submit',addProduct);

// constructor function for product object
function ProductObj(name,category,image,price,gender,sold){
    this.name=name;
    this.category=category;
    this.image=image;
    this.price=price;
    this.gender=gender;
    this.sold=sold;      

}



function addProduct(){
  
    let Products;
    if(JSON.parse(localStorage.getItem('Products'))===null){
        Products=[];
    }else{
        Products=JSON.parse(localStorage.getItem('Products'));
    }


    

    var name=document.querySelector('#name').value;
    var category=document.querySelector('#category').value;
    var image=document.querySelector('#image').value;
    var price=document.querySelector('#price').value;
    var gender=document.querySelector('#gender').value;
    var sold=document.querySelector('#sold').value;
    let productObj=new ProductObj(name,category,image,price,gender,sold);

    if(productObj.category!="" && productObj.name!="" && productObj.image!="" && productObj.price!=""){
        Products.push(productObj);
        localStorage.setItem('Products',JSON.stringify(Products));
        alert("Added Sucessfull");
    }else{
        alert("Enter all Details");
    }   
    
    
}