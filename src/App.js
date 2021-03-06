import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

export default class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    constructor() {
        super();
        console.log("App-constructor");
    };

    componentDidMount() {
        console.log("App Mounted");
    }
    handelDecrement=(counter)=>{
      const counters=[...this.state.counters];
      const index=counters.indexOf(counter);
      counters[index]={...counter};
      counters[index].value--;
      this.setState({counters});
    };

    handelIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };
    handelReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters});
    };
    handelDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters: counters});
    };

    render() {
        console.log("App-rendered");
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handelReset}
                        onIncrement={this.handelIncrement}
                        onDecrement={this.handelDecrement}
                        onDelete={this.handelDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}