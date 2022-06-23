import {createElement} from "./utils/utils";
// styles
import 'normalize.css/normalize.css';
import './scss/base.scss';
// components
import {Header} from "./components/Header";
import {Maps} from "./components/Maps";
import {Feedback} from "./components/Feedback";
import {Footer} from "./components/Footer";

const headElements = [
    createElement('link', {rel: 'shortcut icon', href: 'https://rs.school/favicon.ico'}),
];

const components = [
    Header(),
    Maps(),
    Feedback(),
    Footer(),
];

const root = document.createElement('div');
root.id = 'root';
root.append(...components);

document.head.append(...headElements);
document.body.appendChild(root);