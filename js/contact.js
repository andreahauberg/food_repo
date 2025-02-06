document.querySelector("#frmContact").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = e.target.txtName.value;
  const email = e.target.txtEmail.value;
  const comments = e.target.txtComments.value;

  const submittedInfo = `
  Thank You for Your message. We will get back to you soon!
  
  Registered information:
  - Name: ${name}
  - Email: ${email}
  - Comments: ${comments}
  `;

  alert(submittedInfo);

  window.location.replace("index.html");
});
