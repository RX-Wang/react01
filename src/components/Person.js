import React, { Component, PropTypes } from 'react'

export default class Person extends Component {
    render() {
        const { age, name, sex, books , isGrowing} = this.props;
        return (
            <div>
                我是store中的age：{age}
                <h4>我是store中的属性--name ：{name}</h4>
                <h4>我是store中的属性--sex ：{sex}</h4>
                <h4>我是store中的属性--books ：{books.join(',')}</h4>
                <button onClick={ (e) => this.grow_sync(e) }>age同步增长1岁</button>
                <button onClick={ (e) => this.grow_async(e)}>age异步增长10岁，需要有个loading图样</button>    
                <img alt="loading..." src={require('../timg.jpeg')} style={{position:"absolute" , top:0 , right:0 , display : isGrowing ? 'block' : 'none'}}/>
            </div>
        )
    }
    //同步增长1岁；
    grow_sync(){
        this.props.ageAddOne(1);
    }
    //异步增长10岁
    grow_async(){
        this.props.ageAddAsync(10);
    }
}

Person.propTypes = {
    ageAddOne   : PropTypes.func.isRequired,
    ageAddAsync   : PropTypes.func.isRequired,
    age         : PropTypes.number.isRequired,
    name        : PropTypes.string.isRequired,
    sex         : PropTypes.string.isRequired,
    books       : PropTypes.array.isRequired,
    isGrowing   : PropTypes.bool
};