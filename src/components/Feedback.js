import {createElement} from "../utils";
import {FeedbackSocial} from "./FeedbackSocial";
import {FeedbackForm} from "./FeedbackForm";

export const Feedback = () => {
    const title = createElement('h2', {class: 'title', innerHTML: 'Get in touch'});
    const subtitle = createElement('p', {
        class: 'subtitle',
        innerHTML: 'We are always happy to make valuable new contacts.'
    });

    return createElement('section', {
        class: 'feedback',
        children: [
            FeedbackForm([title, subtitle]),
            FeedbackSocial()
        ]
    });
}