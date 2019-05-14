import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl:'https://picsum.photos/200'
  //   tags: ["tag1", "tag2", "tag3"]
  //   // tags:[]
  // };

  // constructor(props){
  //     super(props);
  //     // console.log("constructor", this)
  //     this.handleIncrement=this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no more Tags..</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // handleIncrement = () => {
  //   console.log("increment Clicked", this.state.value);
  //   // let update=this.state.count++;
  //   this.setState({
  //     value: this.state.value + 1
  //   });
  // };

  render() {
    console.log("props in counter ", this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            // onClick={this.handleIncrement}
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>

          <button
            // onClick={this.handleIncrement}
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>

          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
        {/* <img src={this.state.imageUrl} alt=""/> */}

        {/* <button onClick={()=>this.handleIncrement()} className="btn btn-secondary btn-sm">Increment</button> */}
        {/* <br/> */}
        {/* {this.state.tags.length === 0 && "Please create a new Tag!"}
                {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
