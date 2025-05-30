// Event Handling Section
document.addEventListener('DOMContentLoaded', () => {
    // Button Click Event
    const clickButton = document.getElementById('clickButton');
    let clickCount = 0;
    clickButton.addEventListener('click', () => {
        clickCount++;
        clickButton.textContent = `Clicked ${clickCount} times!`;
        clickButton.style.backgroundColor = `hsl(${clickCount * 20}, 70%, 50%)`;
    });

    // Hover Box Event
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.addEventListener('mouseenter', () => {
        hoverBox.style.backgroundColor = '#FF5722';
    });
    hoverBox.addEventListener('mouseleave', () => {
        hoverBox.style.backgroundColor = '#2196F3';
    });

    // Keypress Detection
    const keypressInput = document.getElementById('keypressInput');
    keypressInput.addEventListener('keypress', (e) => {
        console.log(`Key pressed: ${e.key}`);
        keypressInput.style.borderColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
    });

    // Double Click Secret Box
    const secretBox = document.getElementById('secretBox');
    secretBox.addEventListener('dblclick', () => {
        secretBox.style.transform = 'rotate(360deg)';
        secretBox.style.transition = 'transform 1s';
        setTimeout(() => {
            secretBox.style.transform = 'rotate(0deg)';
        }, 1000);
    });

    // Long Press Detection
    let pressTimer;
    secretBox.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
            secretBox.style.backgroundColor = '#FF9800';
            secretBox.textContent = 'Long press detected!';
        }, 1000);
    });

    secretBox.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
    });

    // Tabs Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Validation
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Real-time validation
    username.addEventListener('input', () => {
        validateUsername();
    });

    email.addEventListener('input', () => {
        validateEmail();
    });

    password.addEventListener('input', () => {
        validatePassword();
    });

    function validateUsername() {
        const errorElement = username.nextElementSibling;
        if (username.value.length < 3) {
            errorElement.textContent = 'Username must be at least 3 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validateEmail() {
        const errorElement = email.nextElementSibling;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorElement.textContent = 'Please enter a valid email address';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    function validatePassword() {
        const errorElement = password.nextElementSibling;
        if (password.value.length < 8) {
            errorElement.textContent = 'Password must be at least 8 characters long';
            return false;
        }
        errorElement.textContent = '';
        return true;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Image Gallery
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            img.style.transform = 'scale(1.2)';
            setTimeout(() => {
                img.style.transform = 'scale(1)';
            }, 300);
        });
    });
}); 