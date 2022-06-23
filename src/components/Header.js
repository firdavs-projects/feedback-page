import {createElement} from "../utils/utils";

export const Header = () => {
    const header = createElement('header', { class: 'header' });
    const heading = createElement('h1', { class: 'container', innerHTML: 'CONTACT' });
    header.append(heading);

    return header;
}