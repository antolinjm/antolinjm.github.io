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

    const emailInput = form.querySelector('input[name="email"]');

    emailInput.addEventListener('input', () => {
        emailInput.classList.remove('input-error');
        const hint = emailInput.nextElementSibling;
        if (hint && hint.classList.contains('input-hint')) hint.remove();
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Email validation
        const emailVal = emailInput.value.trim();
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);
        if (!validEmail) {
            emailInput.classList.add('input-error');
            if (!emailInput.nextElementSibling || !emailInput.nextElementSibling.classList.contains('input-hint')) {
                const hint = document.createElement('span');
                hint.className = 'input-hint';
                hint.textContent = 'Enter a valid email address.';
                emailInput.after(hint);
            }
            emailInput.focus();
            return;
        }

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
                const inner = document.getElementById('formInner');
                inner.style.transition = 'opacity 0.3s ease';
                inner.style.opacity = '0';
                setTimeout(() => {
                    inner.hidden = true;
                    const success = document.getElementById('formSuccess');
                    success.hidden = false;
                    success.style.opacity = '0';
                    success.style.transition = 'opacity 0.3s ease';
                    requestAnimationFrame(() => { success.style.opacity = '1'; });
                }, 300);
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
