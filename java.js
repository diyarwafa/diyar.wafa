
(function () {
  emailjs.init("Dwwzx9_SFMDvQvdTO"); // 👈 لێرە public key ـت بنووسە
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_9j4542i", "template_2q384ww", params)
    .then(function () {
      alert("Message sent successfully ✅");
      document.getElementById("contactForm").reset();
    })
    .catch(function (error) {
      alert("Error ❌");
      console.log(error);
    });
});



const images = document.querySelectorAll('.imgs');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

// تەنها یەک وێنە پیشان بدرێت
function showImage(i) {
  images.forEach(img => img.style.display = 'none');
  images[i].style.display = 'block';
}

// سەرەتادا
showImage(index);

// Next
nextBtn.onclick = () => {
  index++;
  if (index >= images.length) index = 0;
  showImage(index);
};

// Prev
prevBtn.onclick = () => {
  index--;
  if (index < 0) index = images.length - 1;
  showImage(index);
};

