import React, { Component, PropTypes }  from 'react'
import { connect }                      from 'react-redux'
//import {bindActionCreators}             from 'redux'
import PersonComp                       from '../components/Person'
import { /* growing_up,growed_up , */grow_up_sync, grow_up_async} from '../actions'
class Person extends Component {
    render() {
        // Injected by connect() call:
        const { age, name, sex, books , isGrowing , dispatch}=this.props;
        return (
            <div>
                <PersonComp
                    age={age}
                    name={name}
                    sex={sex}
                    books={books}
                    isGrowing={isGrowing}
                    ageAddOne={ growedAge => 
                        dispatch(grow_up_sync(growedAge)) 
                    }
                    ageAddAsync={ groedAge => 
                        dispatch(grow_up_async(groedAge))
                    }
                     />
            </div>
        )
    }
}

Person.propTypes={
    age        : PropTypes.number.isRequired,
    name        : PropTypes.string.isRequired,
    sex         : PropTypes.string.isRequired,
    books       : PropTypes.array.isRequired,
    isGrowing   : PropTypes.bool
};

function mapStateToProps({ person }) {
    return { ...person};
}

/* function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        growing_up,
        growed_up
    }, dispatch);
} */


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(Person)