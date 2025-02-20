document.querySelector("#frmContact").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.txtName.value;
  const email = e.target.txtEmail.value;
  const comments = e.target.txtComments.value;

  const modal = document.querySelector("#contact_message");

  modal.querySelector("#name").innerText = name;
  modal.querySelector("#email").innerText = email;
  modal.querySelector("#comments").innerText = comments;

  modal.showModal();
  modal.focus();

  // modal.querySelector(".close").addEventListener("click", function () {
  //   this.parentElement.parentElement.close();
  // });
  modal.querySelector(".close").addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("close", () => {
    window.location.replace("index.html");
  });
});

// const submittedInfo = `
// Thank You for Your message. We will get back to you soon!

// Registered information:
// - Name: ${name}
// - Email: ${email}
// - Comments: ${comments}
// `;

// alert(submittedInfo);
