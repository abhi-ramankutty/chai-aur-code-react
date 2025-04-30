function customRender(reactElement, container) {
	// const domElem = document.createElement(reactElement.type);

	// domElem.innerHTML = reactElem.children;
	// domElem.setAttribute("href", reactElem.props.href);
	// domElem.setAttribute("target", reactElem.props.target);

	// container.appendChild(domElem);

	const domElem = document.createElement(reactElement.type);
	domElem.innerHTML = reactElem.children;
    for (const prop in reactElem.props) {
        domElem.setAttribute(prop, reactElem.props[prop])
    }
	container.appendChild(domElem);
}

const reactElem = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "Click Me... For Google",
};
const root = document.querySelector("#root");

customRender(reactElem, root);
