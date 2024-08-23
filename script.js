document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('nameInput');
    const submitButton = document.getElementById('submitButton');
    const doveAnimation = document.getElementById('doveAnimation');

    // Thay đổi src của doveAnimation thành dove.gif
    doveAnimation.src = 'dove.gif';

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() !== '') {
            submitButton.disabled = false;
            submitButton.classList.add('enabled');
        } else {
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');
        }
    });

    submitButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            sendEmail(name);
            submitButton.disabled = true;
            submitButton.classList.remove('enabled');

            setTimeout(() => {
                showDoveAnimation();
            }, 500); // Chim bồ câu xuất hiện sau khi nút bị vô hiệu hóa
        }
    });

    function showDoveAnimation() {
        doveAnimation.style.transform = 'translateX(100vw)';
        setTimeout(() => {
            doveAnimation.style.transform = 'translateX(-100px)'; // Reset vị trí để cho lần sau
        }, 2000); // Thời gian hoạt ảnh bay qua màn hình
    }
});
