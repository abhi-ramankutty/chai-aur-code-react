import Chai from './Chai';

function App() {
    let username = 'Hitesh | ChaiAurCode';
    return (
        <>
            <h1>Chai aur Code - React</h1>
            <Chai></Chai>
            <p>Course by: {username}</p>
        </>
    );
}

export default App;

/**
 * {} -> You can write Evaluated Expression
 * here you dont write JS, but instead you write the evaluatied-expression( i.e final output)
 * 
 * The reason you are not allowed to add js-expression there is because, the compiler(or say React.createElement) converts the component/content into a object
 * and in JS, you cannot add js-expression, instead you'll have to add the evaluated values for it work 
 */