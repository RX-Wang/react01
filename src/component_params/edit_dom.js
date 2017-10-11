/**
 * Created by wxq on 16-12-21.
 */
import React from 'react';
import {Link} from 'react-router';
class EditDom extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                list: [1, 2, 3]
            };
            this.addItemFromBottom = this.addItemFromBottom.bind(this);
            this.addItemFromTop = this.addItemFromTop.bind(this);
            this.deleteItem = this.deleteItem.bind(this);
        }

        addItemFromBottom() {
            console.log(this.state.list);
            console.log(this.state.list instanceof Array);
            console.log('list长度--%d',this.state.list.length);
            this.setState({
                list: this.state.list.concat([(this.state.list.length + 1)])
            });
        }

        addItemFromTop() {
            this.setState({
                list: [this.state.list.length - 1].concat(this.state.list)
            });
        }

        deleteItem() {
            const newList = [...this.state.list];
            newList.pop();
            this.setState({
                list: newList
            });
        }

        render() {
            return (
                <div>
                    {this.state.list.map((item) => <div>{item}</div>)}
                    <button onClick={this.addItemFromBottom}>尾部插入 Dom 元素</button>
                    <button onClick={this.addItemFromTop}>头部插入 Dom 元素</button>
                    <button onClick={this.deleteItem}>删除 Dom 元素</button>
                    {/*渲染嵌套DOM*/}
                    {this.props.children}
                    <Link to="editDom/Conditional01/001">条件渲染01</Link>
                    <Link to="editDom/Conditional02/002">条件渲染02</Link>
                </div>

            );
        }
    }

export default EditDom;