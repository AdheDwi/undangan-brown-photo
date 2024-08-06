const openTrigger = document.querySelector("#openTrigger");
const cover = document.querySelector(".cover-wrapper");
const minimalizeWrap = document.querySelector(".content-wrapper");
const audio = document.querySelector("#mySong");
const btnSong = document.querySelector("#btnSong");

openTrigger.addEventListener("click", () => {
  cover.classList.add("hide");
  minimalizeWrap.classList.add("show");
  audio.play();
  btnSong.classList.remove("d-none");
});

btnSong.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  if (btnSong.classList.contains("on")) {
    btnSong.classList.remove("on");
  } else {
    btnSong.classList.add("on");
  }
});

const swiper = new Swiper(".swiper-hero", {
  loop: true,
  autoplay: {
    delay: 6000,
  },
  effect: "slide",
  speed: 1000,
});

const targetDate = new Date("April 18, 2024 10:00:00").getTime();
let countdownStatus = "running";

const updateCountdown = () => {
  if (countdownStatus === "finished") {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdownStatus = "finished";
    document.getElementById("countdown").innerHTML = "Countdown finished!";
    updateCountdown(); // Call the function to display "00 00 00 00"
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = seconds
    .toString()
    .padStart(2, "0");
};

if (targetDate - new Date().getTime() > 0) {
  const countdownInterval = setInterval(updateCountdown, 1000);
} else {
  countdownStatus = "finished";
  updateCountdown();
}

// Gallery Scripts

const imgWraps = document.querySelectorAll(".gallery-image");
if (imgWraps) {
  imgWraps.forEach((imgWrap) => {
    imgWrap.addEventListener("click", () => {
      const imageSrc = imgWrap.dataset.image;
      document.getElementById("modalPhoto").src = imageSrc;
    });
  });
}

// Animation Scripts
const groomBox = document.querySelector(".groom-image");
if (groomBox) {
  const groomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        groomBox.classList.add("animate__animated", "animate__fadeInLeft");
      } else {
        groomBox.classList.remove("animate__animated", "animate__fadeInLeft");
      }
    });
  });
  groomObserver.observe(groomBox);
}

const brideBox = document.querySelector(".bride-image");
if (brideBox) {
  const groomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        brideBox.classList.add("animate__animated", "animate__fadeInRight");
      } else {
        brideBox.classList.remove("animate__animated", "animate__fadeInRight");
      }
    });
  });
  groomObserver.observe(brideBox);
}

const eventImgBox = document.querySelector(".event-image");
if (eventImgBox) {
  const groomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        eventImgBox.classList.add("animate__animated", "animate__fadeInDown");
      } else {
        eventImgBox.classList.remove(
          "animate__animated",
          "animate__fadeInDown"
        );
      }
    });
  });
  groomObserver.observe(eventImgBox);
}

const rsvpImgBox = document.querySelector(".rsvp-image");
if (rsvpImgBox) {
  const groomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rsvpImgBox.classList.add("animate__animated", "animate__fadeInUp");
      } else {
        rsvpImgBox.classList.remove("animate__animated", "animate__fadeInUp");
      }
    });
  });
  groomObserver.observe(rsvpImgBox);
}

const textBox = document.querySelector(".text-box");
if (textBox) {
  const groomObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          textBox.classList.add(
            "animate__animated",
            "animate__backInDown",
            "animate__slower"
          );
          // Hentikan observer setelah animasi pertama kali dimainkan
          observer.disconnect();
        }
      });
    },
    { once: true }
  ); // Gunakan properti once untuk memastikan observer berhenti setelah animasi pertama kali dimainkan
  groomObserver.observe(textBox);
}

// copies scripts
const copyBCA = document.getElementById("copyBca");
const copyBRI = document.getElementById("copyBri");
const copyAddress = document.getElementById("copyAddress");

copyBCA.addEventListener("click", () => {
  const textToCopy = "1342881518";

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Rekening BCA disalin ke clipboard");
    })
    .catch((error) => {
      console.error("Gagal menyalin:", error);
    });
});
copyBRI.addEventListener("click", () => {
  const textToCopy = "629501042982536";

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Rekening BRI disalin ke clipboard");
    })
    .catch((error) => {
      console.error("Gagal menyalin:", error);
    });
});

copyAddress.addEventListener("click", () => {
  const textToCopy =
    "Perumahan Gn. Muria, Jln Muria 1 No. 13 RT 08 RW 19, Kelurahan Larangan Kec. Harjamukti - Cirebon. 45141";

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Alamat Pengiriman disalin ke clipboard");
    })
    .catch((error) => {
      console.error("Gagal menyalin:", error);
    });
});
