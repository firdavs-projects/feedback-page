export const createElement = (tag, args) => {
    const element = document.createElement(tag);
    if (args) {
        Object.keys(args).forEach(key => {
            if (key === 'class') {
                element.classList.add(args[key]);
                return;
            }
            if (key === 'children') {
                console.log(args[key], element);
                if (Array.isArray(args[key])) {
                    element.append(...args[key]);
                } else {
                    element.append(args[key]);
                }
                return;
            }
            element[key] = args[key];
        });
    }
    return element;
}

export const isValidEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}