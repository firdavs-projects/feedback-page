import {createElement} from "../utils";

export const Footer = () => {
    const link = createElement('a', {
        href: 'https://app.rs.school/cv/2077dc36-91de-43f9-843b-553976dea00a',
        innerHTML: 'Firdavs Abdulloev',
        class: 'author-link'
    });
    const developer = createElement('div', {class: 'developer', innerHTML: 'Developed by ', children: link});
    const copyright = createElement('p', {
        class: 'copyright',
        innerHTML: `Copyright &copy; ${new Date().getFullYear()} Company LLC`
    });
    return createElement('footer', {class: 'footer', children: [developer, copyright]});
}