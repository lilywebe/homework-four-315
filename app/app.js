import * as model from "./model.js";
$(document).ready(function () {
  initApp();
  //initListeners();
});
function initApp() {
  $(window).on("hashchange", route);
  route();
}
function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  //   let pageIDArray = pageID.split("/");
  //   pageID = pageIDArray[0];
  //   let subPageID = pageIDArray[1];

  //   console.log("sub" + subPageID);

  if (pageID == "") {
    model.changePage("home", initListeners);
  } else {
    model.changePage(pageID, initListeners);
  }
}

function initListeners() {
  $("#submitlogin").click((e) => {
    console.log("click");
    e.preventDefault();
    if (model.fireModal()) {
      model.changePage("home", initListeners);
    }
  });
}
