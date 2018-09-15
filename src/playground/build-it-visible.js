let isVisible = false;
const appRoot = document.getElementById('app');

const onButtonClick = () => {
    isVisible = !isVisible;

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visiblilty Toggle</h1>
            <button onClick={ onButtonClick }>{ isVisible ? 'Hide Details' : 'Show Details' }</button>
            { isVisible && <p>Some text lorem ipsum :)</p> }
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();