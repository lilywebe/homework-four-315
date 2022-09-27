function changePage(pageID) {
  $.get(`pages/${pageID}.html`, function (data) {
    console.log(data);
    $("#app").html(data);
  }).fail((error) => {
    if (error.status == "404") {
      alert("Page cannot be found. Please check your url");
    }
    console.log("error", error.status);
  });
}
