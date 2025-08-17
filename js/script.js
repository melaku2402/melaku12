var tablinks = document.getElementsByClassName("tab-links");

var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  // console.log(tablink);
  // console.log(tablinks);
  
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    // console.log(tabcontents);
    
  }
  event.currentTarget.classList.add("active-link");
  // classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}
//....... side menubar............

var sidebar = document.getElementById("sd");
// console.log(sidebar);

function openMenu(){
  sidebar.style.right="0 ";
}
function closeMenu(){
  sidebar.style.right= "-200px";
}

// const msg=document.getElementById("msg");
// msg.innerHTML="Message sent successfully";

// setTimeout(() => {
//  msg.innerHTML="" 
// }, 3000);



     const scriptURL =
       "https://script.google.com/macros/s/AKfycbzLkKpqmIDFH8IyzAYNZYOyki3TcXbY0hXMKgwDWhploE6-evkbvbFEaMbHWPoRjTlN/exec";
       console.log(scriptURL);
       
     const form = document.forms["submit-to-google-sheet"];
       console.log(form);
       const msg = document.getElementById("msg");

     form.addEventListener("submit", (e) => {
       e.preventDefault();
       fetch(scriptURL, { method: "POST", body: new FormData(form) })
         .then((response) => {
          msg.innerHTML = "Message sent successfully";
          setTimeout(() => {
            msg.innerHTML = "";
          }, 3000);
          form.reset()
         })
         .catch((error) => console.error("Error!", error.message));
     });







// // </script> */}
