class Modal {
    constructor(modalId, closeButtonId) {
        this.modalElement = document.getElementById(modalId);
        this.closeButton = document.getElementById(closeButtonId);
        this.init();
    }

    init() {
        this.closeButton.addEventListener('click', () => this.close());
    }

    open() {
        this.modalElement.style.display = "flex";
    }

    close() {
        this.modalElement.style.display = "none";
        Form.clearFields();
    }
}

class Field {
    constructor(fieldId, regex, name) {
        this.fieldElement = document.getElementById(fieldId);
        this.regex = regex;
        this.name = name;
        this.init();
    }

    init() {
        this.fieldElement.setAttribute('data-placeholder', this.fieldElement.placeholder);
    }

    validate() {
        let value = this.fieldElement.value.trim();
        let isValid = this.regex.test(value);
        if (!isValid) {
            this.fieldElement.style.background = "#fccaca";
            this.fieldElement.value = "";
            this.fieldElement.placeholder = `Please enter valid ${this.name}.`;
        } else {
            this.fieldElement.style.background = "#cafccb";
        }
        return isValid;
    }

    clear() {
        this.fieldElement.value = '';
        this.fieldElement.style.background = '';
        this.fieldElement.placeholder = this.fieldElement.getAttribute('data-placeholder');
    }
}

class Form {
    static init() {
        this.fields = [
            new Field('contact-name', /^[a-zA-Z\s]+$/, 'name'),
            new Field('contact-email', /^\S+@\S+\.\S+$/, 'email'),
            new Field('contact-message', /.+/, 'message')
        ];
        this.submitButton = document.getElementById('contact-submit');
        this.submitButton.addEventListener('click', (event) => this.handleSubmit(event));
    }

    static clearFields() {
        this.fields.forEach(field => field.clear());
    }

    static handleSubmit(event) {
        let allValid = true;
        this.fields.forEach(field => {
            if (!field.validate()) {
                allValid = false;
            }
        });
        if (!allValid) {
            event.preventDefault();
        }
    }
}

class Card {
    constructor(cardId, text) {
        this.cardElement = document.getElementById(cardId);
        this.text = text;
        this.subjectField = document.getElementById('contact-subject');
        this.init();
    }

    init() {
        this.cardElement.addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        this.subjectField.value = this.text;
        modal.open();
        this.subjectField.addEventListener("input", () => this.preventDelete());
    }

    preventDelete() {
        if (!this.subjectField.value.startsWith(this.text)) {
            this.subjectField.value = this.text;
        }
    }
}

const modal = new Modal('input-box', 'closeBox');

Form.init();

new Card('priceCardOne', 'One Page Website - HTML, CSS, JS');
new Card('priceCardTwo', 'One Page Website - React or Angular');
new Card('priceCardThree', 'Custom Multi-Page Website');
new Card('priceCardFour', 'Website - WordPress or Weebly');
new Card('priceCardFive', 'Working About - ');

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.field-contact');
    inputs.forEach(input => {
        input.setAttribute('data-placeholder', input.placeholder);
    });
});





