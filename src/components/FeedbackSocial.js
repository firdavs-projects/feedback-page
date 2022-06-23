import {createElement} from "../utils";
import infoIcon from "../assets/icons/info.svg";
import fbIcon from "../assets/icons/fb.svg";
import twIcon from "../assets/icons/tw.svg";
import inIcon from "../assets/icons/in.svg";

export const FeedbackSocial = () => {
    const feedbackSocial = createElement('aside', {class: 'feedback-social'});
    const titleSocial = createElement('h2', {class: 'title', innerHTML: 'Contact information'});
    titleSocial.classList.add('social-title');
    const info = createElement('img', {src: infoIcon, alt: 'info', class: 'info'});
    const subtitleSocial = createElement('p', {
        class: 'subtitle',
        innerHTML: 'Click to view'
    });
    subtitleSocial.classList.add('social-subtitle');

    const linksContainer = createElement('div', {class: 'links-container'});
    const fb = createElement('img', {src: fbIcon, alt: 'facebook'});
    const tw = createElement('img', {src: twIcon, alt: 'twitter'});
    const linked = createElement('img', {src: inIcon, alt: 'linkedin'});
    const facebook = createElement('a', {href: '#', class: 'facebook'});
    facebook.append(fb);
    const twitter = createElement('a', {href: '#', class: 'twitter'});
    twitter.append(tw);
    const linkedin = createElement('a', {href: '#', class: 'linkedin'});
    linkedin.append(linked);
    linksContainer.append(facebook, twitter, linkedin);

    feedbackSocial.append(titleSocial, info, subtitleSocial, linksContainer);
    return feedbackSocial;
}