let mobile_header = document.querySelector(".header");
let hamburger = document.querySelector(".mobile_nav");

hamburger.addEventListener("click",function(){
    mobile_header.classList.toggle("active");
})



// HEADDER CONTENT

document.getElementById("header_logo").innerHTML = "LOGO";

let nav_content = ["HOME","PAGES","Items-1","Items-2","Items-3","another-items - 1","another-items - 2","another-items - 3","another-items - 4","another-items - 5","Items-4","Items-5","PORTFOLIO","BLOG","POST FORMATS","JOOMLA!","K2 BLOG"];

let header_nav = document.getElementById("nav");
// console.log(header_nav);
let nav_list = header_nav.getElementsByTagName("a");
// console.log(nav_list[5]);

// nav_list[0].innerHTML = nav_content[0];

for(i=0;i<nav_content.length;i++){
    nav_list[i].innerHTML = nav_content[i];
}

//BANNER CONTENT

let banner_arr = ["Are you hungry?","Don't wait!!!","Let start to order food now!"];

let banner_content = document.getElementById("banner_content_container");

let banner_h1 = banner_content.getElementsByTagName("h1");

for(i=0;i<banner_arr.length;i++){
    banner_h1[i].innerHTML = banner_arr[i];
}

let banner_btn = document.getElementById("banner_btn");
banner_btn.innerHTML="CHECK OUT MENU";

// SECTION CONTENT

let section_header = ["3000 each","3000 each","3000 each"];
let section_images = ["./Images/banner.jpg",
"./Images/emy-XoByiBymX20-unsplash.jpg",
"./Images/louis-hansel-UtcOhVC-3VU-unsplash.jpg"
];

document.querySelector(".section_heading").innerHTML = "FAVORITE FOOD";

let section = document.getElementById("section_container");
// console.log(section);

let section_h3 = section.getElementsByTagName("h3");
// console.log(section_h3);


for(i=0;i<section_header.length;i++){
    section_h3[i].innerHTML = section_header[i];
}

let image =section.getElementsByTagName("img");

    image[0].src = section_images[0];
    image[1].src = section_images[1];
    image[2].src = section_images[2];
    


// FOOTER CONTENT

let footer_heading = ["Company","get help","online shop","follow us"];

let footer_anchore = ["about us","our services","privacy policy","affiliate program","FAQ","shipping","returns","order status","payment options","watch","bag","shoes","dress"]

let footer = document.getElementById("footer_content");

let footer_h4 =footer.getElementsByTagName("h4");
// console.log(footer_h4);

let footer_a = footer.getElementsByTagName("a");
console.log(footer_a);

for(i=0;i<footer_heading.length;i++){
    footer_h4[i].innerHTML = footer_heading[i];
}

for(i=0;i<footer_anchore.length;i++){
    footer_a[i].innerHTML = footer_anchore[i];
}

// let store = document.querySelector(".footer");

// let newElement = document.createElement("div");
// newElement.innerHTML = "wasim";
// newElement.style.backgroundColor = "white";
// newElement.style.textAlign = "center";
// newElement.style.marginTop ="20px";
// store.append(newElement);


// let value = alert("hellow javascript");

// console.log(value);






