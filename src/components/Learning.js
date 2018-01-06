import React, { Component, PropTypes } from 'react'

function Repeat(props){
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
}
function ListOfTenThings(){
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>This is item {index} in the list</div>}
      </Repeat>
    );
  }
export default class Learning extends Component {
    constructor(props) {
        super(props);
        this.state = {
          age1: 10
        };
      }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                age1: this.state.age1 + this.props.age
            })
        },1000);
    }
    render() {
        return (
            <div>
                { {} && <p> {this.state.age1} -- {this.props.age}</p>}
                <ListOfTenThings/>
            </div>
        )
    }
}

Learning.propTypes = {
   age : PropTypes.number
};
Learning.defaultProps = {
    age: 1
  };