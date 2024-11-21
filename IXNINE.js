window.onload = function() {
    let scrollInterval = setInterval(function() {
      window.scrollBy(0, 6); // Scroll ke bawah sedikit demi sedikit (10px)
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        clearInterval(scrollInterval); // Stop scroll setelah mencapai dasar halaman
      }
    }, 50); // Scroll setiap 30 milidetik
  };
  const zoomButton = document.getElementById("zoomButton");
  zoomButton.addEventListener("click", function () {
  zoomButton.classList.add("zoom-in");
   setTimeout(() => {
    zoomButton.classList.remove("zoom-in");
  }, 200);
  });
  function playMusic() {
    var audio = new Audio('Kereta Kedewasaan - JKT48.mp3'); // Gantilah dengan path ke file musik Anda
    audio.play();
  }
      const shineButton = document.getElementById("shineButton");
  const shineEffect = shineButton.querySelector(".shine-effect");

  shineButton.addEventListener("click", function () {
  // Tambahkan kelas animasi kilau
  shineEffect.classList.add("shine");

  // Hapus kelas setelah animasi selesai
  setTimeout(() => {
    shineEffect.classList.remove("shine");
  }, 500);
  });
  function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
  section.scrollIntoView({ behavior: 'smooth' });
  }
  }

  document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Pesan Anda telah dikirim!');
  });
  
  