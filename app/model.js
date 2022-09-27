export function changePage(pageID, callback) {
  $.get(`pages/${pageID}.html`, function (data) {
    console.log(data);
    $("#app").html(data);
    callback();
  }).fail((error) => {
    if (error.status == "404") {
      alert("Page cannot be found. Please check your url");
    }
    console.log("error", error.status);
  });
}

export function fireModal() {
  const uname = $("#username").val();
  const pass = $("#password").val();

  if (uname && pass) {
    Swal.fire("thanks for signing in!");
    $("#username").val("");
    $("#password").val("");
  } else {
    Swal.fire("Please enter a username and password");
  }
}
