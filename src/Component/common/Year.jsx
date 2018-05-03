import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import {YearChange} from '../../Action/Action';
// import  {connect} from 'react-redux';
class Year extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div data-flex="dir:left main:justify">
                <FontAwesomeIcon icon='angle-left' size='2x' onClick={() => {this.props.goPrevYear()}} />
                <div className='yearshow' data-flex="cross:center">{this.props.year}</div>
                <FontAwesomeIcon icon='angle-right' size='2x' onClick={() => {this.props.goNextYear()}} />
            </div>
        )
    }
}

// 获取 state 变化
// const mapStateToProps = (state) => {
//     return {
//         value: state.year,
//     }
// };

// 发送行为
// const mapDispatchToProps = (dispatch) => {
//     return {
//         goPrevYear: () => dispatch(YearChange(2000)),
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Year);
export  default Year;