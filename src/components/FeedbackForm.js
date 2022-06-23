import {createElement, isValidEmail} from "../utils/utils";

const LIMIT = 50;
export const FeedbackForm = (children) => {
    const feedbackForm = createElement('form', {class: 'feedback-form'});
    // -------------------------------------------------
    const fullnameContainer = createElement('div', {class: 'fullname-container'});
    const nameContainer = createElement('div', {class: 'input-container'});
    const nameLabel = createElement('label', {for: 'name', innerHTML: 'Name', class: 'label'});
    const name = createElement(
        'input',
        {type: 'text', class: 'input', id: 'name', name: 'name', placeholder: 'John Doe'}
    );
    nameContainer.append(nameLabel, name);
    // -------------------------------------------------
    const emailContainer = createElement('div', {class: 'input-container'});
    const emailLabel = createElement('label', {for: 'email', innerHTML: 'Email', class: 'label'});
    const email = createElement(
        'input',
        {type: 'email', class: 'input', id: 'email', name: 'email', placeholder: 'john.doe@example.com'}
    );
    emailContainer.append(emailLabel, email);
    fullnameContainer.append(nameContainer, emailContainer);
    // -------------------------------------------------
    const messageLabel = createElement('label', {for: 'message', innerHTML: 'Message', class: 'label'});
    const message = createElement(
        'input',
        {
            id: 'message',
            class: 'input',
            name: 'message',
            placeholder: 'Hi there! My name is John, I have a question about'
        }
    );
    const messageLine = createElement(
        'span',
        {class: 'message-line', style: "width: 0px;"}
    );
    const messageCounter = createElement(
        'span',
        {class: 'message-counter', innerHTML: `0/${LIMIT}`}
    );
    const messageContainer = createElement('div', {class: 'input-container'});
    messageContainer.append(messageLabel, message, messageLine, messageCounter);
    // -------------------------------------------------
    const submit = createElement(
        'button',
        {type: 'submit', class: 'btn', innerHTML: 'Send'},
    );
    // -------------------------------------------------
    const inputs = [name, email, message];
    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let messageLength = e.target.value.length;
            switch (input.id) {
                case 'name':
                    messageLength && name.classList.remove('error');
                    break;

                case 'email':
                    messageLength && email.classList.remove('error');
                    break;

                case 'message':
                    if (messageLength >= LIMIT) {
                        message.value = message.value.slice(0, LIMIT);
                        messageLength = LIMIT;
                    }
                    if (messageLength < LIMIT) {
                        message.classList.remove('error');
                    }
                    messageLine.style.width = `${messageLength * 2}%`;
                    messageCounter.innerHTML = `${messageLength}/${LIMIT}`;
                    break;

                default:
                    break;
            }
        })
    });
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(feedbackForm);
        const data = {};
        let isValid = true;
        for (const [key, value] of formData.entries()) {
            switch (key) {
                case 'name':
                    if (value.length < 2) {
                        name.classList.add('error');
                        isValid = false;
                        return;
                    }
                    data[key] = value;
                    name.classList.remove('error');
                    break;
                case 'email':
                    if (!isValidEmail(value)) {
                        email.classList.add('error');
                        isValid = false;
                        return;
                    }
                    data[key] = value;
                    email.classList.remove('error');
                    break;
                case 'message':
                    if (value.length < 2) {
                        message.classList.add('error');
                        isValid = false;
                        return;
                    }
                    data[key] = value;
                    message.classList.remove('error');
                    break;

                default:
                    break;
            }
        }
        if (isValid) {
            console.log(data);
            const thanks = createElement('h2', {class: 'thanks', innerHTML: 'Thank you for your feedback!'});
            feedbackForm.replaceWith(thanks);
        }
    });

    feedbackForm.append(...children, fullnameContainer, messageContainer, submit);
    return feedbackForm;
}