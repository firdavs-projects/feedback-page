import {createElement, isValidEmail} from "../utils/utils";
import {FeedbackSocial} from "./FeedbackSocial";
import {FeedbackForm} from "./FeedbackForm";

export const Feedback = () => {
    const feedbackSection = createElement('section', {class: 'feedback-section'});

    const title = createElement('h2', {class: 'title', innerHTML: 'Get in touch'});
    const subtitle = createElement('p', {
        class: 'subtitle',
        innerHTML: 'We are always happy to make valuable new contacts.'
    });
    const feedbackForm = FeedbackForm([title, subtitle]);
    const feedbackSocial = FeedbackSocial();

    feedbackSection.append(feedbackForm, feedbackSocial);
    return feedbackSection;
}