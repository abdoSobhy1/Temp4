let input = document.querySelectorAll("#input-fc");
input.forEach((item) => {
  item.addEventListener("focusout", function () {
    if (item.nextElementSibling.classList.contains("label-fc"))
      label = item.nextElementSibling;
    if (this.value != "" && this.value.trim() != "") {
      label.classList.add("focused");
    } else {
      label.classList.remove("focused");
    }
  });
});
document.querySelectorAll(".sidebar li a").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll(".sidebar li a").forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});

let sidebar = document.querySelector(".sidebar");
let title = function () {
  if (sidebar.offsetWidth > 58) {
    document.querySelector(".sidebar > h3").innerHTML = "AbdelRahman";
  } else {
    document.querySelector(".sidebar > h3").innerHTML = "ABDO";
  }
};
window.onload = title;
window.onresize = title;
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".head").style.top = "0px";
  } else {
    document.querySelector(".head").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
};
