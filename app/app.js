import * as model from "./model";
$(document).ready(function () {
  initApp();
  initListeners();
});
function initApp() {
  $(window).on("hashchange", route);
  route();
}
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];

  console.log("sub" + subPageID);

  if (pageID == "") {
    model.changePage("home");
  } else {
    model.changePage(pageID);
  }
}

function initListeners() {
  $("#submit-login").on("click", swal.fire("You are signed in!"));
}
