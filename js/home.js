// Simulasi data pengguna
const user = {
    username: "member01",
    fullName: "citra septia"
};


// Smooth scroll untuk navigasi
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Menghapus '#' dari href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Menangani logout
function setupLogout() {
    const logoutLink = document.getElementById('logout-link');

    logoutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah reload halaman
        const confirmLogout = confirm("Apakah Anda yakin ingin logout?");
        if (confirmLogout) {
            window.location.href = "../index/login.html"; // Arahkan ke halaman login
        }
    });
}

// Jalankan fungsi setelah halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    setupLogout();
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const containerWidth = document.querySelector(".carousel-container").offsetWidth;

    let isDragging = false;
    let startPosition = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;

    // Mendapatkan posisi X dari mouse atau touch
    const getPositionX = (event) => {
        return event.type.includes("mouse")
            ? event.pageX
            : event.touches[0].clientX;
    };

    // Fungsi memulai drag/touch
    const touchStart = (event) => {
        isDragging = true;
        startPosition = getPositionX(event);
        carousel.classList.add("dragging");
        animationID = requestAnimationFrame(animation);
    };

    // Fungsi mengakhiri drag/touch
    const touchEnd = () => {
        isDragging = false;
        cancelAnimationFrame(animationID);

        // Hitung pergeseran
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -100 && Math.abs(currentTranslate) < (carouselItems.length - 1) * containerWidth) {
            prevTranslate -= containerWidth;
        } else if (movedBy > 100 && currentTranslate !== 0) {
            prevTranslate += containerWidth;
        }

        // Set posisi slider
        setSliderPosition();
        carousel.classList.remove("dragging");
    };

    // Fungsi menggerakkan carousel
    const touchMove = (event) => {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPosition;
        }
    };

    // Menetapkan posisi slider
    const setSliderPosition = () => {
        carousel.style.transform = `translateX(${prevTranslate}px)`;
    };

    // Animasi pergerakan slider
    const animation = () => {
        if (isDragging) {
            setSliderPosition();
            requestAnimationFrame(animation);
        }
    };

    // Event listeners
    carousel.addEventListener("mousedown", touchStart);
    carousel.addEventListener("mouseup", touchEnd);
    carousel.addEventListener("mouseleave", touchEnd);
    carousel.addEventListener("mousemove", touchMove);

    carousel.addEventListener("touchstart", touchStart);
    carousel.addEventListener("touchend", touchEnd);
    carousel.addEventListener("touchmove", touchMove);
});


