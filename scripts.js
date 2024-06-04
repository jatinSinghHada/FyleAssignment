document.getElementById('contactBtn').addEventListener('click', function () {
    document.getElementById('popupForm').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('popupForm').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://getform.io/f/pboxjega', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                document.getElementById('popupForm').style.display = 'none';
                document.getElementById('successPopup').style.display = 'flex';
                this.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            alert('An error occurred! Please try again later.');
            console.error('Error:', error);
        });
});

document.getElementById('okBtn').addEventListener('click', function () {
    document.getElementById('successPopup').style.display = 'none';
});


// Point 4 : 

document.addEventListener('DOMContentLoaded', function () {
    const contentBoxes = document.querySelectorAll('.content-box');
    const projectImage = document.getElementById('project-image');

    const images = {
        strategy: ['pic1.jpg', 'pic2.jpg', 'pic3.jpg'],
        coffee: ['pic4.jpg', 'pic5.jpg', 'pic6.jpg'],
        sports: ['pic7.jpg', 'pic8.jpg', 'pic9.jpg']
    };

    contentBoxes.forEach(box => {
        box.addEventListener('click', function (event) {
            event.preventDefault();
            const category = box.getAttribute('data-category');
            const imageArray = images[category];
            const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];
            projectImage.src = randomImage;
        });
    });
});
