import React, { useEffect } from "react";
// import moment from 'moment'
import { Table } from 'semantic-ui-react'
import BigCalendar from 'react-big-calendar'
import moment from "moment-timezone";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getEvents } from '../gcal'
import { useState } from "react";

const localizer = BigCalendar.momentLocalizer(moment)

export default class Calendar extends React.Component {
  state = {
    dateObject: moment(),
    events: [],
    url: ''
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 767) {
      this.setState({ url: 'https://calendar.google.com/calendar/embed?src=h4k7h4j0jjbqm83tjcis960hk4%40group.calendar.google.com&ctz=America%2FNew_York&mode=agenda' });
    } else {
      this.setState({ url: 'https://calendar.google.com/calendar/embed?src=h4k7h4j0jjbqm83tjcis960hk4%40group.calendar.google.com&ctz=America%2FNew_York' });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    return (
      <div>
        <h2 className="neon3h smooth w3-text-white pt-2 pb-5">Calendar</h2>
        <div className="Calendar-inner embed">
          <div className="scrollWrapper">
            <iframe src={this.state.url} width="100%" height="800" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    );
  }
}
