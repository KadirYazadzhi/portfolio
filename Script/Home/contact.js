class ContactFormManager {
    constructor() {
        this.submitBtn = document.querySelector(".submit-button");
        this.inputs = document.querySelectorAll(".contact input");
        this.textarea = document.querySelector(".contact textarea");

        if (this.submitBtn) {
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        this.submitBtn.addEventListener("click", (e) => {
            // Note: Preventing default behavior might be needed if it's a form submit, 
            // but keeping original logic for now which was just clearing fields.
            
            // Clear inputs after a delay to simulate submission processing
            setTimeout(() => {
                this.clearForm();
            }, 2000);
        });
    }

    clearForm() {
        this.inputs.forEach((input) => {
            input.value = '';
        });
        if (this.textarea) {
            this.textarea.value = '';
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactFormManager();
});
