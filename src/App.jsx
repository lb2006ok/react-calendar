import React, { Component } from 'react';
import Year from '../src/Component/common/Year';
import Content from '../src/Component/Content';

/* App component */
class App extends Component {
    constructor(props){
        super(props);

        let date = new Date();
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth()+1,
            day: date.getDate(),
        }
    }

    goPrevYear = () => {
        let year = this.state.year - 1;
        this.setState({
            year: year
        })
    };
    goNextYear = () => {
        let year = this.state.year + 1;
        this.setState({
            year: year
        })
    }
    componentWillMount() {

    };

    render() {
        return (
            <div className='main' data-flex="dir:top box:justify">
                <Year goPrevYear = {this.goPrevYear} goNextYear = {this.goNextYear} year = {this.state.year}/>
                <Content year={this.state.year} month={this.state.month} day={this.state.day}/>
                {/*<Footer />*/}
            </div>
        )
    }
}
export default App;
