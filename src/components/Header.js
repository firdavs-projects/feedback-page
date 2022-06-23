import {createElement} from "../utils";

export const Header = () => {
    const header = createElement('h1', { class: 'container', innerHTML: 'CONTACT' });
    return createElement('header', {
        class: 'header',
        children: header
    });
}