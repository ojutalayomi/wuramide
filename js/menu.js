// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = (event) => {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}*/

//Submit Button Validation Start
function doSubmit(){
  var su = document.getElementById("submit");

  if(document.CakeOrder.Size.value === null){
   document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.layer.value === null){
    document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.flavor.value =""){
    document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.covering.value = ""){
    document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.toppings.value = ""){
    document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.image.value === null){
    document.getElementById('id01').style.display = 'none';
  } else if(document.CakeOrder.text.value === null){
    document.getElementById('id01').style.display = 'none';
  }else{
    document.getElementById('id01').style.display = 'block';
    su.onfocus = () => {
  su.value = "Submitted!";
}
  }
  // Cake Size
  const sIs = document.getElementById("sIs");
  const mini = 1;
  const maxi = 15;
  if(mini <= sIs.value && sIs.value <= maxi){
    console.log(`Size:  ${sIs.value} inches`);
    messageSize.innerHTML = null;
    document.getElementById('id01').style.display = 'none';
  } else {
    messageSize.innerHTML = `Choose within ${mini} - ${maxi} inches!`;
    
  }
//Cake Layer
  const layer = document.getElementById("boxes");
  const mini1 = 1;
  const maxi1 = 10;
  if(mini1  <= layer.value && layer.value <= maxi1){
    console.log(`Layer: ${layer.value} Layers`);
    messageLayer.innerHTML = null;
    document.getElementById('id01').style.display = 'none';
  } else {
    messageLayer.innerHTML = `Choose within ${mini1} - ${maxi1} layers!`;
  }
//Cake Flavor  
  const flavor = document.getElementsByName("flavor");
    if(flavor[0].checked === true){
      console.log(`Flavor: ${flavor[0].value}`);
    } else if(flavor[1].checked === true){
      console.log(`Flavor: ${flavor[1].value}`);
    } else if(flavor[2].checked === true){
      console.log(`Flavor: ${flavor[2].value}`);
    } else if(flavor[3].checked === true){
      console.log(`Flavor: ${flavor[3].value}`);
    } else if(flavor[4].checked === true){
      console.log(`Flavor: ${flavor[4].value}`);
    }else{
      console.log( null);
      document.getElementById('id01').style.display = 'none';
    }
   
//Cake Covering   
 if(covering[0].checked === true){
      console.log(`Covering: ${covering[0].value}`);
    } else if(covering[1].checked === true){
      console.log(`Covering: ${covering[1].value}`);
    } else if(covering[2].checked === true){
      console.log(`Covering: ${covering[2].value}`);
    } else{
      console.log(null);
      document.getElementById('id01').style.display = 'none';
    }
//Cake Toppings
  if(toppings[0].checked === true){
      console.log(`Topping: ${toppings[0].value}`);
      document.getElementById('id01').style.display = 'block';
    } else if(toppings[1].checked === true){
      console.log(`Topping: ${toppings[1].value}`);
      document.getElementById('id01').style.display = 'block';
    } else if(toppings[2].checked === true){
      console.log(`Topping: ${toppings[2].value}`);
      document.getElementById('id01').style.display = 'block';
    } else if(toppings[3].checked === true){
      console.log(`Topping: ${toppings[3].value}`);
      document.getElementById('id01').style.display = 'block';
    }else{
      console.log(null);
      document.getElementById('id01').style.display = 'none';
    }
    console.log(`${document.CakeOrder.image.value}`);
    console.log(`${document.CakeOrder.text.value}`);   

    //document.getElementById('id01').style.display = 'block';
  // Get current date
const date = new Date();
// Extract year, month, and day components from the date
const year = date.getFullYear();
const month = date.getMonth() + 1; // months are zero-indexed, so add 1
const day = date.getDate();
//Generate random alphabets

let randomAlphabets = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


// Generate a random number between 1 and 9999
const randomNumber = Math.floor(Math.random() * 9999) + 1;

// Construct transaction ID by combining date components and random number
const transactionId = `${year}${month}${day}${randomNumber}${randomAlphabets(2)}`;

// Output transaction ID to console
console.log(`Transaction ID: ${transactionId}`);
//console.log(randomAlphabets(2));
var transactionid = document.getElementById("transactionid");
transactionid.innerHTML = `${transactionId}`;


//var myImg = document.getElementById("myImg");
//myImg.setAttribute('src',`${document.CakeOrder.image.value}`) ;

var sizeinfo = document.getElementById("sizeinfo");
sizeinfo.innerHTML = `${sIs.value} Inches`;

var layerinfo = document.getElementById("layerinfo");
layerinfo.innerHTML = `${layer.value} Layers`;

var flavorinfo = document.getElementById("flavorinfo");
flavorinfo.innerHTML = `${document.CakeOrder.flavor.value}`;

var coveringinfo = document.getElementById("coveringinfo");
coveringinfo.innerHTML = `${document.CakeOrder.covering.value}`;

var toppinginfo = document.getElementById("toppinginfo");
toppinginfo.innerHTML = `${document.CakeOrder.toppings.value}`;

var moreinfo = document.getElementById("moreinfo");
moreinfo.innerHTML = `${document.CakeOrder.text.value}`;
}

  //Submit Button Validation Ends
var su = document.getElementById("submit");

su.onblur = () => {
  su.value = "Submit Order";

}

const c = document.getElementById("clearBtn")
// When the user clicks on the clear field, show the message box
c.onfocus = () => {
  document.getElementById("clearBtn").value = "Cleared!";
}
// When the user clicks outside of the clear field, hide the message box
c.onblur = () => {
  document.getElementById("clearBtn").value = "Clear Order";
}

var can = document.getElementById("Cancel");
can.onfocus = () => {
  document.getElementById('id01').style.display = 'none';
}

/*function cancelCheckout(){
  document.getElementById('id01').style.display='none'
}*/

function doClear(){
 document.CakeOrder.Size.value = "";
 document.CakeOrder.layer.value = "";

 document.CakeOrder.flavor[0].checked = false;
 document.CakeOrder.flavor[1].checked = false;
 document.CakeOrder.flavor[2].checked = false;
 document.CakeOrder.flavor[3].checked = false;
 document.CakeOrder.flavor[4].checked = false;

 document.CakeOrder.covering[0].checked = false;
 document.CakeOrder.covering[1].checked = false;
 document.CakeOrder.covering[2].checked = false;

 document.CakeOrder.toppings[0].checked = false;
 document.CakeOrder.toppings[1].checked = false;
 document.CakeOrder.toppings[2].checked = false;
 document.CakeOrder.toppings[3].checked = false;

 document.CakeOrder.image.value = "";
 document.CakeOrder.text.value = "";
 return;
}

var fname = document.getElementById("fname");
var cname = document.getElementById("cardname");
cname.onfocus = () => {
 if(fname.value !== cname.value){
  cname.className = "invalid";
  return false;
}
 return true;
}
/*Write javscript code for create random transaction id according to the date of transaction*/
/*let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let transactionId = `${year} ${month} ${day} ${hours} ${minutes} ${seconds}  ` + Math.floor(Math.random() * 10000 + 1);
console.log(transactionId);*/

// Get the modal
var modal1 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("output");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal1.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}

var loadFile = function(event) {
  //var image = document.getElementById('output');
  img.src=URL.createObjectURL(event.target.files[0]);
};

