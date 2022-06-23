import {createElement} from "../utils";
import infoIcon from "../assets/icons/info.svg";
import fbIcon from "../assets/icons/fb.svg";
import twIcon from "../assets/icons/tw.svg";
import inIcon from "../assets/icons/in.svg";

export const FeedbackSocial = () => {
    const titleSocial = createElement('h2', {class: 'title', innerHTML: 'Contact information'});
    const info = createElement('img', {src: infoIcon, alt: 'info', class: 'info'});
    const subtitleSocial = createElement('p', {
        class: 'subtitle',
        innerHTML: 'Click to view'
    });

    titleSocial.classList.add('social-title');
    subtitleSocial.classList.add('social-subtitle');

    const fb = createElement('img', {src: fbIcon, alt: 'facebook'});
    const facebook = createElement('a', {href: '#', class: 'facebook', children: fb});
    const tw = createElement('img', {src: twIcon, alt: 'twitter'});
    const twitter = createElement('a', {href: '#', class: 'twitter', children: tw});
    const ln = createElement('img', {src: inIcon, alt: 'linkedin'});
    const linkedin = createElement('a', {href: '#', class: 'linkedin', children: ln});

    const linksContainer = createElement('div', {
        class: 'links-container',
        children: [facebook, twitter, linkedin]
    });

    return createElement('aside', {
        class: 'feedback-social',
        children: [titleSocial, info, subtitleSocial, linksContainer]
    });
}