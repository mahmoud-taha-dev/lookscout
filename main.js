//region newsletter subscription form
const newsletterForm = document.querySelector(".newsletter-form");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".email-error");
const successMessage = document.querySelector(".success-message");
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessage.classList.remove("active");
  const emailValue = emailInput.value.trim();
  console.log("hopaaaaaaaaaa")
  if (!emailValue) {
    errorMessage.textContent = "Email is required";
    errorMessage.classList.add("active");
    return;
  } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue))) {
    errorMessage.textContent = "Email is not valid";
    errorMessage.classList.add("active");
    return;
  }
  
  newsletterForm.classList.add("remove");
  successMessage.classList.add("active");
})

//endregion


//region latest blog posts section
const modal = document.getElementById("blog-modal");
const closeBtn = document.querySelector(".close");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-image-title");
const openModal = () => {
  modal.style.display = "block";
  document.documentElement.style.overflow = "hidden";
}

const closeModal = () => {
  modal.style.display = "none";
  document.documentElement.style.overflow = "unset";
}
document.querySelectorAll(".post-card-img").forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.dataset.image;
    modalTitle.textContent = img.dataset.title;
    openModal();
  })
})
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
})
//endregion