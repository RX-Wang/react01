import React, { Component, PropTypes }  from 'react'
import { connect }                      from 'react-redux'
//import {bindActionCreators}             from 'redux'
import PersonComp                       from '../components/Person'
import { /* growing_up,growed_up , */grow_up_sync, grow_up_async,changeAddress,changeHomeAddress,changeSchoolAddress} from '../actions'
class Person extends Component {
    render() {
        // Injected by connect() call:
        const { age, name, sex, books , isGrowing , dispatch,schoolAddress,homeAddress}=this.props;
        return (
            <div>
                <PersonComp
                    age={age}
                    name={name}
                    sex={sex}
                    books={books}
                    isGrowing={isGrowing}
                    homeAddress={homeAddress}
                    schoolAddress={schoolAddress}
                    ageAddOne={ growedAge => 
                        dispatch(grow_up_sync(growedAge)) 
                    }
                    ageAddAsync={ groedAge => 
                        dispatch(grow_up_async(groedAge))
                    }
                    changeAddress={ newAddress => 
                        /* 触发一个具有通用type的action */
                        dispatch(changeAddress(newAddress))
                    }
                    changeHomeAddress={ newAddress =>
                        /* 触发一个仅具有家庭地址type的action */ 
                        dispatch(changeHomeAddress(newAddress))
                    }
                    changeSchoolAddress={ newAddress => 
                        /* 触发一个仅具有学校地址type的action */
                        dispatch(changeSchoolAddress(newAddress))
                    }
                     />
            </div>
        )
    }
}

Person.propTypes={
    age             : PropTypes.number.isRequired,
    name            : PropTypes.string.isRequired,
    sex             : PropTypes.string.isRequired,
    homeAddress     : PropTypes.string.isRequired,
    schoolAddress   : PropTypes.string.isRequired,
    books           : PropTypes.array.isRequired,
    isGrowing       : PropTypes.bool
};

function mapStateToProps({ person,student }) {
    return { 
        ...person,
        schoolAddress : student.schoolAddress
    };
}

/* function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        growing_up,
        growed_up
    }, dispatch);
} */


// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(Person)