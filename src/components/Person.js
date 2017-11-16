import React, { Component, PropTypes } from 'react'

export default class Person extends Component {
    render() {
        const { age, name, sex, books , isGrowing , homeAddress, schoolAddress} = this.props;
        return (
            <div>
                我是store中的age：{age}
                <h4>我是store中的属性--name ：{name}</h4>
                <h4>我是store中的属性--sex ：{sex}</h4>
                <h4>我是store中的属性--books ：{books.join(',')}</h4>
                <h4>我的<i style={{color:'red'}}>家庭地址</i>：{homeAddress}</h4>
                <h4>我的<i style={{color:'red'}}>学校地址</i>：{schoolAddress}</h4>
                <button style={{display:'block',marginBottom:'10px'}} onClick={ (e) => this.grow_sync(e) }>age同步增长1岁</button>
                <button style={{display:'block',marginBottom:'10px'}} onClick={ (e) => this.grow_async(e)}>age异步增长10岁，需要有个loading图样</button>
                <button style={{display:'block',marginBottom:'10px'}} onClick={ (e) => this.changeAddress(e)}>改变地址,具有重名Action.type</button>
                <button style={{display:'block',marginBottom:'10px'}} onClick={ (e) => this.changeHomeAddress(e)}>改变家庭地址-->CHANGE_HOMEADDRESS</button>
                <button onClick={ (e) => this.props.changeSchoolAddress('广寒宫')}>改变学校地址-->CHANGE_SCHOOLADDRESS</button>
                <img alt="loading..." src={require('../timg.jpeg')} style={{position:"absolute" , top:0 , right:"240px" , display : isGrowing ? 'block' : 'none'}}/>
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
    //改变通用地址
    changeAddress(){
        this.props.changeAddress('冥王星');
    }
    //改变家庭地址
    changeHomeAddress(){
        this.props.changeHomeAddress('故宫');
    }

    // --->  可以在构造函数中单独定义一个方法来调用props传入的方法，也可以直接在组件中使用 props传来的方法
    //改变学校地址,     
    /* changeSchoolAddress(){
        this.props.changeSchoolAddress('广寒宫');
    } */
}

Person.propTypes = {
    ageAddOne       : PropTypes.func.isRequired,
    ageAddAsync     : PropTypes.func.isRequired,
    changeAddress   : PropTypes.func.isRequired,
    changeHomeAddress   : PropTypes.func.isRequired,
    changeSchoolAddress : PropTypes.func.isRequired,
    age             : PropTypes.number.isRequired,
    name            : PropTypes.string.isRequired,
    sex             : PropTypes.string.isRequired,
    homeAddress     : PropTypes.string.isRequired,
    schoolAddress   : PropTypes.string.isRequired,
    books           : PropTypes.array.isRequired,
    isGrowing       : PropTypes.bool
};