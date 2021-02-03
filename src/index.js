import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (<h3>{this.props.data.hello}</h3>);
    }
}
const propsValues = {
    hello: "Hello from React in WebPack",
};
ReactDOM.render(
    <App data={propsValues} />,
    document.getElementById("root")
)