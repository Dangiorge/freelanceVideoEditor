const text_anim = document.querySelectorAll(".text_anim");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerButton = (window.innerHeight / 5) * 4;
  console.log(triggerButton);
  console.log(text_anim);

  text_anim.forEach((text) => {
    const textTop = text.getBoundingClientRect().top;
    console.log(textTop);
    if (textTop < triggerButton) {
      text.classList.add("show");
    } else {
      text.classList.remove("show");
    }
  });
}
