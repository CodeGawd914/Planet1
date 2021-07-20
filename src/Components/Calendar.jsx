import React from "react";
// import moment from 'moment'
import {Table} from 'semantic-ui-react'
import BigCalendar from 'react-big-calendar'
import moment from "moment-timezone";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../gcal'

const localizer = BigCalendar.momentLocalizer(moment)

export default class Calendar extends React.Component {
  state = {
        dateObject: moment(),
        events:[]
    }

    componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

    firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                 .startOf("month")
                 .format("d");
   return firstDay;
};


    daysInMonth = ()=>{
      let dateObject = this.state.dateObject;
      let numberofDays = moment(dateObject).daysInMonth()
      return numberofDays
    }
  render() {
    console.log(this.state);
    let weekdaysShort = moment.weekdaysShort()
    console.log(weekdaysShort);

    let weekdayNames = weekdaysShort.map(day =>
        <Table.HeaderCell>{day}</Table.HeaderCell>
     )

     let blanks = [];
      for (let i = 0; i < this.firstDayOfMonth(); i++) {
        blanks.push(
        <Table.Cell>{""}</Table.Cell>
        );
      }

      let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
          daysInMonth.push(
            <Table.Cell key={d}>{d}</Table.Cell>
      );
    }

      const totalSlots = [...blanks, ...daysInMonth];
      let rows = [];
      let cells = [];

      totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
          cells.push(row); // if index not equal 7 that means not go to next week
        } else {
          rows.push(cells); // when reach next week we contain all td in last week to rows
          cells = []; // empty container
          cells.push(row); // in current loop we still push current row to new container
        }
        if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
          }
        });
        let daysinmonth = rows.map((d, i) => {
      return <Table.Row>{d}</Table.Row>;
    });

        let myEventsList = []

    return (
      <div>
        <h2 className="neon3h smooth w3-text-white pt-2 pb-5">Calendar</h2>
        <div className="Calendar-inner embed">
          <div className="scrollWrapper">
          <iframe src="https://calendar.google.com/calendar/embed?src=h4k7h4j0jjbqm83tjcis960hk4%40group.calendar.google.com&ctz=America%2FNew_York"  width="100%" height="800" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
        {/* <div className="Calendar-inner">
            <BigCalendar
                    style={{height: '800px'}}
                    format={"DD/MM/YYYY HH:mm"} 
              localizer={localizer}
              events={this.state.events}
              startAccessor="start"
              endAccessor="end"
              defaultView='agenda'
            />
        </div> */}


      </div>
    );
  }
}
