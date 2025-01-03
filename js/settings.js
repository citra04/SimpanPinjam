document.addEventListener('DOMContentLoaded', () => {
    // Form update profile
    const updateProfileForm = document.getElementById('update-profile-form');
    updateProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Profil berhasil diperbarui!');
    });

    // Form change password
    const changePasswordForm = document.getElementById('change-password-form');
    changePasswordForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (newPassword === confirmPassword) {
            alert('Kata sandi berhasil diperbarui!');
        } else {
            alert('Kata sandi baru dan konfirmasi tidak cocok!');
        }
    });
});
