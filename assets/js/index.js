var form = document.getElementById("my-form");

async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        status.innerHTML = "Message Successfully Sent! Thank You !!!";
        form.reset()
    } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
                status.innerHTML = "Oops! There was a problem submitting your form"
            }
        })
    }
}).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)







var showContent = document.getElementById("myDIV");
var readMore = document.getElementById("read-more");

readMore.addEventListener('click', function(e){
    if (showContent.style.display === "block") {
    showContent.style.display = "none";
    readMore.innerHTML = 'Read More >>>';
  } else {
    showContent.style.display = "block";
    readMore.innerHTML = 'Read less';
  }
});




var profile = document.getElementById("profile");
var sideBar = document.getElementById("side-bar");

profile.addEventListener('click', function(e){
    if (sideBar.style.display === "block") {
    sideBar.style.display = "none";
    // readMore.innerHTML = 'Read More >>>';
  } else {
    sideBar.style.display = "block";
    // readMore.innerHTML = 'See less';
  }
});


var menu = document.getElementById("menu");
var mobileNavs = document.getElementById("mobile-navs");

menu.addEventListener('click', function(e){
  
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";

  }
});

// var menu = document.getElementById("menu");
// var bars = document.getElementById("bars");
// var cancel = document.getElementById("cancel");
// menu.addEventListener('click', function(e){
  
//     if (bars.style.display === "none") {
//     bars.style.display = "block";
//     cancel.style.display = "none";
//   } else {
//     cancel.style.display = "block";
//     bars.style.display = "none";

//   }
// });





var home = document.getElementById("home-nav");
var mobileNavs = document.getElementById("mobile-navs");
home.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var about = document.getElementById("about-nav");
var mobileNavs = document.getElementById("mobile-navs");
about.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var resume = document.getElementById("resume-nav");
var mobileNavs = document.getElementById("mobile-navs");
resume.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

var project = document.getElementById("project-nav");
var mobileNavs = document.getElementById("mobile-navs");
project.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


var test = document.getElementById("test-nav");
var mobileNavs = document.getElementById("mobile-navs");
test.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});


var contact = document.getElementById("contact-nav");
var mobileNavs = document.getElementById("mobile-navs");

contact.addEventListener('click', function(e){
    if (mobileNavs.style.display === "block") {
    mobileNavs.style.display = "none";
  } else {
    mobileNavs.style.display = "block";
  }
});

/* ============================Mode Changer============================ */
const mode = document.querySelector('.mode-changer');
const text = document.querySelector('.mode-text');

mode.addEventListener('click', e=> {
  document.body.classList.toggle('dark');
  text.textContent = 'this is dark mode';
  if(document.body.classList != 'dark'){
    text.textContent = 'this is light mode';
  }
});




