import 'normalize.css/normalize.css';
import './scss/base.scss';
import {createElement} from "./utils";
import {Header, Maps, Feedback, Footer} from "./components";

const headers = [
    createElement('title', {innerHTML: 'Feedback'}),
    createElement('link', {rel: 'shortcut icon', href: 'https://rs.school/favicon.ico'}),
    createElement('meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}),
    createElement('meta', {name: 'description', content: 'Contact form'}),
    createElement('meta', {name: 'keywords', content: 'contact, feedback, form'}),
    createElement('meta', {name: 'author', content: 'Firdavs Abdulloev'}),
    createElement('meta', {name: 'og:title', content: 'Feedback'}),
    createElement('meta', {name: 'og:description', content: 'Contact form'}),
    createElement('meta', {name: 'og:image', content: 'https://rs.school/favicon.ico'}),
];

const root = createElement('div', {
    id: 'root',
    children: [
        Header(),
        Maps(),
        Feedback(),
        Footer(),
    ]
});

document.head.append(...headers);
document.body.append(root);