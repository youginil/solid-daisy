import { ParentComponent } from "solid-js";

const App: ParentComponent = (props) => {
    return (
        <>
            <header>Header</header>
            <div>{props.children}</div>
        </>
    );
};

export default App;
