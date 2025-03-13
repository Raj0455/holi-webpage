
    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        // Header scroll effect
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Back to top button visibility
        if (backToTop) {
            if (window.scrollY > 500) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }
    });

    // Countdown Timer
    function updateCountdown() {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        
        // Set the date for Holi 2025 (March 14, 2025)
        const holiDate = new Date('March 14, 2025 00:00:00').getTime();
        const now = new Date().getTime();
        const timeLeft = holiDate - now;

        // If Holi has passed, set for next year
        if (timeLeft < 0) {
            const nextYear = new Date().getFullYear() + 1;
            const nextHoliDate = new Date(`March 14, ${nextYear} 00:00:00`).getTime();
            const timeToNextHoli = nextHoliDate - now;
            
            calculateTime(timeToNextHoli);
            const countdownTitle = document.querySelector('.countdown-container h3');
            if (countdownTitle) {
                countdownTitle.textContent = `Countdown to Holi ${nextYear}`;
            }
        } else {
            calculateTime(timeLeft);
            const countdownTitle = document.querySelector('.countdown-container h3');
            if (countdownTitle) {
                countdownTitle.textContent = 'Countdown to Holi 2025';
            }
        }
    }

    function calculateTime(timeLeft) {
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Update countdown every second
    if (document.getElementById('countdown')) {
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }

