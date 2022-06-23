import {createElement, isValidEmail} from "../utils";

const LIMIT = 100;
export const FeedbackForm = (children) => {
    const name = createElement(
        'input',
        {type: 'text', class: 'input', id: 'name', name: 'name', placeholder: 'John Doe'}
    );
    const nameLabel = createElement('label', {for: 'name', innerHTML: 'Name', class: 'label'});
    const nameContainer = createElement('div', {
        class: 'input-container', children: [
            nameLabel,
            name
        ]
    });

    const email = createElement(
        'input',
        {type: 'email', class: 'input', id: 'email', name: 'email', placeholder: 'john.doe@example.com'}
    );
    const emailLabel = createElement('label', {for: 'email', innerHTML: 'Email', class: 'label'});
    const emailContainer = createElement('div', {
        class: 'input-container', children: [
            emailLabel,
            email
        ]
    });
    const fullnameContainer = createElement('div', {
        class: 'fullname-container', children: [
            nameContainer,
            emailContainer
        ]
    });

    const message = createElement(
        'input',
        {
            id: 'message',
            class: 'input',
            name: 'message',
            placeholder: 'Hi there! My name is John, I have a question about'
        }
    );
    const messageLabel = createElement('label', {for: 'message', innerHTML: 'Message', class: 'label'});
    const messageLine = createElement(
        'span',
        {class: 'message-line', style: "width: 0px;"}
    );
    const messageCounter = createElement(
        'span',
        {class: 'message-counter', innerHTML: `0/${LIMIT}`}
    );
    const messageContainer = createElement('div', {
        class: 'input-container', children: [
            messageLabel,
            message,
            messageLine,
            messageCounter
        ]
    });

    const submit = createElement(
        'button',
        {type: 'submit', class: 'btn', innerHTML: 'Send'},
    );

    const inputs = [name, email, message];
    inputs.forEach(input => {
        input.addEventListener('input', (e) => inputHandler(e, input, inputs));
    });

    const feedbackForm = createElement('form', {
        class: 'feedback-form',
        children: [
            ...children, fullnameContainer, messageContainer, submit
        ]
    });
    feedbackForm.addEventListener('submit', (e) => submitHandler(e, feedbackForm, inputs));

    return feedbackForm;
}


const inputHandler = (e, input, [name, email, message]) => {
    let textLength = e.target.value.length;
    switch (input.id) {
        case 'name':
            textLength && name.classList.remove('error');
            break;

        case 'email':
            textLength && email.classList.remove('error');
            break;

        case 'message':
            if (textLength >= LIMIT) {
                message.value = message.value.slice(0, LIMIT);
                textLength = LIMIT;
            }
            if (textLength < LIMIT) {
                message.classList.remove('error');
            }
            const messageLine = message.parentElement.querySelector('.message-line');
            const messageCounter = message.parentElement.querySelector('.message-counter');
            messageLine.style.width = `${textLength}%`;
            messageCounter.innerHTML = `${textLength}/${LIMIT}`;
            break;

        default:
            break;
    }
}

const submitHandler = (e, feedbackForm, [name, email, message]) => {
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
}