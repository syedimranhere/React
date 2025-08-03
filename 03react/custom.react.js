function customRender(element, place) {
    // const x = document.createElement(element.type);

    // x.innerHTML = element.children;

    // x.setAttribute('target', element.props.target);
    // x.setAttribute('href', element.props.href);

    // place.appendChild(x);


    const newEl = document.createElement(element.type);
    newEl.innerHTML = element.children;
    for (const prop in element.props) {
        if (prop === 'children') {
            continue
        }
        newEl.setAttribute(prop, element.props[prop]);
    }
// remember place is a DIV
    place.appendChild(newEl);


}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: "Google Liink"
};

const myContainer = document.getElementById('root');
customRender(reactElement, myContainer);
