/**
 * Component 
 */
import React, { Component, PropTypes } from 'react'

const hotSearchStyle = {
    listStyle: "none", display: "inline", marginRight: "10px", cursor: "pointer"
}
export default class SearchDocComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
        }
        this.changeSearchVal.bind(this);
    }
    static propTypes = {
        resultDocs : PropTypes.object,
        searchDoc : PropTypes.func,
        hotSearch: PropTypes.array,
    }
    // 输入框有输入时，更新 state
    changeSearchVal(e){
        this.setState({
            searchVal: e.target.value,
        })
    }
    // 渲染文章类型标题
    renderH1(type){
        return ( <h2>{type}</h2>)
    }
    // 渲染某一类型文章的列表
    renderLi(datas,docType){
        let lis = [];
        for(let i = 0; i < datas.length; i++) {
            lis.push(<li key={docType+i}><a target="blank" href={datas[i].href}>{datas[i].title}</a></li>);
            if(i === 3) {
                lis.push(<li key={`${docType}_more`}><a target="blank" href={`localhost:3000/${docType}`}>查看全部文档</a></li>);
                break;
            }
        }
        return lis;
    }
    // 渲染所有类型列表
    renderType(elem, docType){
        return (
            <div key={`${docType}`}>
                {this.renderH1(docType)}
                <ul>
                    {this.renderLi(elem,docType)}
                </ul>
            </div>
        )
    }
    renderBody(docs){
        let uls = [];
        // eslint-disable-next-line
        for (let key in docs) { 
            uls.push(this.renderType(docs[key], key));
        }
        return (
            <div>
                {uls}
            </div>
        )
    }
    renderHotSearch(datas){
        let hotSearch = [];
        datas.forEach((elem, index) => {
            hotSearch.push(<li key={index} onClick={() => this.props.searchDoc(elem)} style={hotSearchStyle}>{elem}</li>);
        });
        return hotSearch;
    }
    render() {
        return (
            <div style={{border: '1px solid black'}}>
                <input placeholder="输入问题关键词，找到答案" type="text" onChange={e => this.changeSearchVal(e)}/>
                <button onClick={ (e) => this.props.searchDoc(this.state.searchVal)}>搜索</button>
                <div>热搜关键词：</div>
                <ul>
                {this.renderHotSearch(this.props.hotSearch)}
                </ul>
                <div> 
                    {this.renderBody(this.props.resultDocs)}
                </div>
            </div>
        )
    }
}