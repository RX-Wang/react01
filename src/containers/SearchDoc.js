/**
 * Container
 */
import React, { Component, PropTypes }  from 'react'
import { connect }                      from 'react-redux'
import {bindActionCreators}             from 'redux'
import SearchDocComp                    from '../components/SearchDocComp'
import {searchDoc } from '../actions'
class SearchDoc extends Component {
    render() {
        return (
            <div>
                <SearchDocComp 
                    resultDocs={this.props.resultDocs}
                    searchDoc={this.props.searchDoc}
                    hotSearch={this.props.hotSearch}
                />
            </div>
        )
    }
}

SearchDoc.propTypes={
    resultDocs : PropTypes.object,
    searchDoc : PropTypes.func,
    hotSearch: PropTypes.array,
};

function mapStateToProps({ resultDocs, initDocs }) {
    return { 
        resultDocs,
        hotSearch: initDocs.hotSearch,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchDoc
    }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchDoc);