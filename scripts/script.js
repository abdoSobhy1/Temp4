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
    progress;
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
  progress();
};

let progressSpans = document.querySelectorAll(".progress > span");
let section = document.querySelector(".targets");

let progress = function () {
  if (window.scrollY >= section.offsetTop - 600) {
    progressSpans.forEach((span) => {
      if (span.style.width != span.dataset.prog) {
        span.style.width = span.dataset.prog;
      }
    });
  }
};

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange();
  }
}).observe(document, { subtree: true, childList: true });

function onUrlChange() {
  let link = location.href.toString();
  if (link.includes("index")) {
    let progressSpans = document.querySelectorAll(".progress > span");
    let section = document.querySelector(".targets");
    if (window.scrollY >= section.offsetTop - 600) {
      progressSpans.forEach((span) => {
        if (span.style.width != span.dataset.prog) {
          span.style.width = span.dataset.prog;
        }
      });
    }
  }
}
window.onload = progress;
