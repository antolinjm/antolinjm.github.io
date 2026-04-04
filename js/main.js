document.addEventListener('DOMContentLoaded', () => {
    setupScrollButton();
    setupContactForm();
});

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function setupScrollButton() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
    window.addEventListener('scroll', () => { btn.classList.toggle('visible', window.scrollY > 500); });
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('.form-submit-btn');
        const submitText = btn.querySelector('.submit-text');
        btn.disabled = true;
        submitText.textContent = 'Sending…';

        const formData = new FormData(form);

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const data = await res.json();
            if (data.success) {
                form.hidden = true;
                document.getElementById('formSuccess').hidden = false;
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch {
            document.getElementById('formError').hidden = false;
            btn.disabled = false;
            submitText.textContent = 'Send inquiry';
        }
    });
}

function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return String(text).replace(/[&<>"']/g, m => map[m]);
}

function escapeAttr(text) {
    return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
