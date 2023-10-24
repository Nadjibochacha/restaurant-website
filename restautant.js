let home = document.getElementById('slide');
let about = document.getElementById('about');
let menu = document.getElementById('menu');
let reserve = document.getElementById('reserve');
let contact = document.getElementById('contact');
let order = document.getElementById('order');
let contactitle = document.getElementById('con');
let select= document.getElementById('inputGroupSelect02');
let date = new Date();
//show and hide functions
function showhome(){
    home.classList.remove('hide');
    about.classList.add('hide');
    menu.classList.add('hide');
    reserve.classList.add('hide');
    contact.classList.add('hide');
    contactitle.classList.add('hide');
    order.classList.add('hide');
}
function showabout(){
    about.classList.remove('hide');
    home.classList.add('hide');
    menu.classList.add('hide');
    reserve.classList.add('hide');
    contact.classList.add('hide');
    contactitle.classList.add('hide');
    order.classList.add('hide');
}
function showmenu(){
    menu.classList.remove('hide');
    about.classList.add('hide');
    home.classList.add('hide');
    reserve.classList.add('hide');
    contact.classList.add('hide');
    contactitle.classList.add('hide');
    order.classList.add('hide');
}
function showreserve(){
    reserve.classList.remove('hide');
    about.classList.add('hide');
    menu.classList.add('hide');
    home.classList.add('hide');
    contact.classList.add('hide');
    contactitle.classList.add('hide');
    order.classList.add('hide');
}
function showcontact(){
    contact.classList.remove('hide');
    contactitle.classList.remove('hide');
    about.classList.add('hide');
    menu.classList.add('hide');
    reserve.classList.add('hide');
    home.classList.add('hide');
    order.classList.add('hide');
}
function showorder(){
    order.classList.remove('hide');
    about.classList.add('hide');
    menu.classList.add('hide');
    reserve.classList.add('hide');
    contact.classList.add('hide');
    contactitle.classList.add('hide');
    home.classList.add('hide');
}
onload= showhome();
//reserve functions
let customInput = document.getElementById("custom");
let dateInput = document.getElementById("date");
let time = document.getElementById('time');
let r_mail =document.getElementById('r_mail');
select.addEventListener("change", () => {
  if (select.value === "Custom") {
    customInput.style.display = "block";
  } else {
    customInput.style.display = "none";
  }
});
function Affich() {
    let numPeople = "";
    if (select.value === "Custom") {
        numPeople = document.getElementById("custom").value;
    } else {
        numPeople = select.value;
    }
    const htmlString = `
      <p>Number of people: ${numPeople}</p>
      <p>the command number:${Math.ceil(parseInt(numPeople)/4)}${date.getDate()+date.getMonth()+date.getTime()}</p>
    `;
    // Append the HTML string to the #not element
    const notElement = document.getElementById("not");
    if(numPeople==null || select.value=='Choose the number of people' || dateInput.value==null ){
        htmlString ='';
    }
    notElement.innerHTML = htmlString;
    const msg= `Welcome to tastyfood , 
    your reservation: 
    number of people ${numPeople}
    the date ${dateInput.value}${time.value}
    the number of reservation ${Math.ceil(parseInt(numPeople)/4) }${date.getDate()+date.getMonth()+date.getTime()}`;

    //send the confermation mail
    sendmsg(msg);
    clear();
}
function clear() {
    select.value='Choose the number of people';
    customInput.style.display = "none";; 
    dateInput.value = ''; 
    r_mail.value = '';
    time.value=' ';
}
function sendmsg(variable) {
    const r_mail1= r_mail.value;
    Email.send({
        SecureToken : "eeee0a8b-27f0-4b43-8f8b-7e19eeda5726",
        To : r_mail1,
        From : "chachanadjib080@gmail.com",
        Subject : "confirmation mail",
        Body : variable
    }).then(
      message => alert(message)
    );
}
//commant's functions
let mail = document.querySelector('#exampleFormControlInput1');
let comment = document.querySelector('#exampleFormControlTextarea1');
let showcomment = document.querySelector('.comments');


function affihcommnt() {
    if (mail.value!='' && comment.value!='' && String(mail.value).includes('@') ) {
        showcomment.innerHTML +=`<div class="">
        <h5>${mail.value}</h5>
        <p>
            ${comment.value}
        </p>
        </div> `
    }
    clearinuptsofcommant();
}
function clearinuptsofcommant() {
    mail.value='';
    comment.value='';
}
//orderonline functions
let here = document.getElementById('here');
let athome = document.getElementById('Athome');
let menu_r = document.getElementById('menu-r');
let tel=document.getElementById('tel');
let addr=document.getElementById('addr');
let r_table =document.getElementById('check');
let r_her =document.getElementById('r_here');
let r_home = document.getElementById('r_home');
let quntity = document.getElementsByClassName('quntities');
let bill = document.querySelector('.details');
let finaleprice = document.getElementById('finalprice');
let numreceipt  = document.getElementById('numberrec');

function clearorder(){
    if(r_her.checked ===true){
        r_her.checked =false;
    }else{
        r_home.checked =false;
    }
    r_table.checked =false;
    athome.classList.add('hidden');
    here.classList.add('hidden');
    menu_r.classList.add('hidden');
    tel.value ='';
    addr.value ='';
    bill.innerHTML ='';
    finaleprice.value ='';
    numreceipt.value  ='';
    for (let index = 0; index < quntity.length; index++) {
        quntity[index].value='';
    }
}

function showhereopt() {
    here.classList.remove('hidden');
    athome.classList.add('hidden');
    menu_r.classList.remove('hidden');
}
function showhomeopt() {
    here.classList.add('hidden');
    athome.classList.remove('hidden');
    menu_r.classList.add('hidden');
}
function showmenu_r(){
    if (tel.value!=''||addr.value!='') {
        menu_r.classList.remove('hidden');
    }
}
function Receipt(namefood , quantityfood , pricefood ) {
    let qun;
    if (r_table.checked== true||addr.value!='' ) {
        if (quantityfood.value==='') {
            qun= 1;
        } else {
            qun= Math.abs( quantityfood.value);
        }
        bill.innerHTML +=` <div class="col-6">
            ${namefood.innerHTML}
        </div>
        <div class="col-2 me-2">
            ${qun}
        </div>
        <div class="col-3 ms-2">
            ${
                parseInt(qun) * parseInt(pricefood.innerHTML)
            }DA
        </div>`;
        finaleprice.innerHTML= parseInt(finaleprice.innerHTML)+(parseInt(qun) * parseInt(pricefood.innerHTML));
        
    }
}
function buy() { 
    numreceipt.innerHTML =date.getDate()+date.getTime() ;
    var msg1 ='';
    for (let index = 0; index < quntity.length; index++) {
        quntity[index].value='';
    }
    if(r_her.checked ===true){
        r_her.checked =false;
        msg1= `Welcom to tastyfood , 
        your reservation: 
        Final price: ${finaleprice.innerHTML} DA
        the number of reservation: ${numreceipt.innerHTML}`;
    }else{
        r_home.checked =false;
        msg1= `Welcom to tastyfood , 
        your reservation: 
        the phone number${tel.value}
        the address${addr.value}
        the number of reservation ${numreceipt.innerHTML}`;
    }
    r_table.checked =false;
    //send the confermation mail
    sendmsg1(msg1);
}
function sendmsg1(variable) {
    const r_mail1= tel.value;
    Email.send({
        SecureToken : "eeee0a8b-27f0-4b43-8f8b-7e19eeda5726",
        To : r_mail1,
        From : "chachanadjib080@gmail.com",
        Subject : "confirmation mail",
        Body : variable
    }).then(
      message => alert(message)
    );
}
