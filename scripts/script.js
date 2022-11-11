let search = document.getElementById("search");
let label = document.querySelector(".search-label");
let focusFunc = function () {
  if (search.value != "" && search.value.trim() != "") {
    label.classList.add("focused");
  } else {
    label.classList.remove("focused");
  }
};
search.addEventListener("focusout", focusFunc);

document.querySelectorAll(".sidebar li a").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll(".sidebar li a").forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});
