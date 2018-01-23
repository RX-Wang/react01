import React from 'react';
class Testt extends React.Component{
  componentDidMount(){
      document.onclick=this.two;
  }
  one(e){
      e.nativeEvent.stopImmediatePropagation();
      alert(1)
  }
  two(){
      alert(2)
  }
  render(){
      return(<div style={{height:150,width:150,backgroundColor:"#000",color: 'red'}} onClick={this.one}>点我和空白处看区别</div>)
  }
}
export default Testt;