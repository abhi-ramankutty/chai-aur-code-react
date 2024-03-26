function customRender(reactElem, mainContainer) {
    /*
    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;

    domElem.setAttribute('href', reactElem.props.href);
    domElem.setAttribute('target', reactElem.props.target);

    mainContainer.appendChild(domElem);
    */

    const domElem = document.createElement(reactElem.type);
    domElem.innerHTML = reactElem.children;
    for (const prop in reactElem.props) {
        if (prop == 'children') {
            continue;
        }
        domElem.setAttribute(prop, reactElem.props[prop]);
    }
    mainContainer.appendChild(domElem);
}

const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit Google',
};

const mainContainer = document.querySelector('#root');

customRender(reactElem, mainContainer);
