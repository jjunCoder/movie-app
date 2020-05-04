import React from "react";

class App extends React.Component {
    state = {
        number: 0,
    };

    add = () => {
        this.setState((current) => ({ number: current.number + 1 }));
    };

    minus = () => {
        this.setState((current) => ({ number: current.number - 1 }));
    };

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <h2>{this.state.number}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}

export default App;
