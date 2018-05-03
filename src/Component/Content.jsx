import React, {Component} from 'react';

class Day extends Component{
    constructor(props){
        super(props);
        let week = ['一', '二', '三', '四', '五', '六', '日'];
        let CurrentWeek = this.getWeekInfo(this.props.year, this.props.CurrentMonth, this.props.CurrentDay);
        let CurrentDay = this.props.CurrentDay;
        let classname = this.props.class==='CurrentMonth'?'CurrentMonth':'';
        let date = new Date();
        this.state = {
            year: {...props.year},
            currentYear: date.getFullYear(),
            week: week,
            weekIndex: this.getWeekIndex(props),
            currentWeek: CurrentWeek,
            currentDay: CurrentDay,
            classname: classname,
        }
    }
    getWeekInfo = (year, month, day) => {
        let c = parseInt(year/100);
        let y = year.toString().substring(2, 4);
        let m = month;
        let d = day;
        y = parseInt(y, 10);
        if(month <= 2){
            y--;
            m = month + 12;
        }
        1- 1
        2- 0
        3- -1
        0- -5
        let w = y + parseInt(y/4) + parseInt(c/4) - 2*c + parseInt(26 * (m + 1)/10) + d - 1;
        w = w%7;
        return w >= 0 ? w : w+7;
    }
    componentWillReceiveProps(nextProps){
        let classname = nextProps.class==='CurrentMonth'?'CurrentMonth':'';
        this.setState({
            weekIndex: this.getWeekIndex(nextProps),
            classname: classname,
        })
    }
    getWeekIndex(data){
        let day = [];
        let weekIndex = [];
        let weekInfo = [];
        let weekstart = 0;
        let StartWeek = this.getWeekInfo(data.year, data.month, 1);
        let i = 1;
        StartWeek === 0?i = -5: i = 2-StartWeek;
        for(i;i <= data.days;i++){
            day.push(i)
            if(i <= 0){
                weekInfo.push('');
            }else{
                weekInfo.push(i);
            }
            if(weekstart === 6||i === data.days){
                weekIndex.push(weekInfo);
                weekInfo = [];
            }
            weekstart =(weekstart+1)%7
        }
        return weekIndex
    }
    render(){
        return(
            <div className={this.state.classname}>
                <div data-flex="dir:left">
                    {
                        this.state.week.map((key, index) => {
                            return(
                                <div className='WeekCard' key={index}>
                                    <span className=''>{key}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='DayContent'>
                    {
                        this.state.weekIndex.map((key, index) => {
                            return(
                                <div className='WeekIndex' key={index} data-flex="dir:left">
                                    {
                                        key.map((key, index) => {
                                            if(parseInt(key) === this.state.currentDay){
                                                return(
                                                    <div className='DayCard CurrentDay' key={index}>
                                                        <span className=''>{key}</span>
                                                    </div>
                                                )
                                            }else{
                                                return(
                                                    <div className='DayCard' key={index}>
                                                        <span className=''>{key}</span>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
class Content extends Component{
    constructor(props){
        super(props);
        let date = new Date();
        this.state = {
            monthdays: this.getMonthDay(props.year),
            monthclass: this.getMonthClass(props),
            currentYear: date.getFullYear(),
        }
        //
        // this.getMonthDays = (month, flag) =>{
        //     return flag?this.state.monthdays[month-1] + 1:this.state.monthdays[month-1];
        // }
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            ...nextProps,
            monthdays: this.getMonthDay(nextProps.year),
            monthclass: this.getMonthClass(nextProps),
        })
    }
    getMonthDay(year){
        if(year%4 === 0){
            return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }else{
            return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
    }
    getMonthClass(data){
        let monthdays = this.getMonthDay(data.year);
        let monthclass = [];
        let date = new Date();
        let currentYear = date.getFullYear();
        monthdays.map((key, index) => {
            if(parseInt(index+1) === data.month&&data.year === currentYear){
                monthclass.push('CurrentMonth');
            }else{
                monthclass.push('');
            }
        })
        return monthclass;
    }
    render (){
        return(
            <div className='MonthWrapper' data-flex="dir:top">
                {
                    this.state.monthdays.map((key, index) => {
                            return(
                                <div className={'MonthCard '+ this.state.monthclass[index]}  key={index} >
                                    <span className='month'>{index+1}月</span>
                                    <Day days={key} year={this.props.year} CurrentMonth={this.props.month} CurrentDay={this.props.day} month={index+1} flex-box='1'/>
                                </div>
                            )
                    })
                }
            </div>
        )
    }
}
export default Content;