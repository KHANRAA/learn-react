import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Azax call and get new data
        }
    }

    componentWillMount() {
        console.log("Counter-Unmount");
    }

    /*   state = {
           value: this.props.counter.value,
           //tags: ['tag1', 'tag2', 'tag3']
       };
       handelIncrement = product => {
           console.log(product);
           this.setState({value: this.state.value + 1})
       };
   */
    render() {
        console.log('Counter -Rendered');

        //  console.log('props', this.props);
        return (
            <div>
                <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                        className="btn btn-secondary btn-sm">+
                </button>
                <button onClick={() => this.props.onDecrement(this.props.counter)}
                        className="btn btn-secondary btn-sm">-
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                        className="btn m-2 badge-danger btn-sm">X
                </button>
            </div>
        );
    }

    getBadgeCLasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;