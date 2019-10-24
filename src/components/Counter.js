import React, {Component} from 'react';

class Counter extends Component {


    formatCount () {
        const {value} = this.props.counter;
        return value ===0 ? "Zero" : value;
    }

    handleIncrement = (product) =>{
        console.log(product);
        this.setState({ value:this.state.value +1})
    }

    doHandleIncrement = () => {
        this.handleIncrement  ({ id:1 })
    };


    renderTags() {
        if (this.state.tags.length ===0) return <p>There are no tags!</p>;
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    render(){
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";

        return (
            <div> 
                <h4>Count {this.props.id}</h4>
                {/* {this.props.children} */}
                {/* <img src={this.state.imageUrl} alt="" /> */}
                <span className={classes}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-primary btn-sm">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm">Decrement</button>
                <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
                {/* {this.renderTags()} */}
            </div>
        );
    }
}

export default Counter;