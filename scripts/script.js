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
