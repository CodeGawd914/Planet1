import React from "react";
import Calendar1 from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
require('dotenv').config();

let calendars = [
  { calendarId: CALENDAR_ID}
];

let styles = {
  //you can use object styles
  Calendar1: {
    borderWidth: "3px" //make outer edge of calendar thicker
  },

  //you can also use emotion's string styles (remember to add the line 'import { css } from "@emotion/react";')
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 1px solid red;
  `
};

export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <h2 className="neon3h smooth w3-text-white pt-2 pb-5">Calendar</h2>
        <div className="calendar-main-inner">
          <Calendar1 apiKey={API_KEY} calendars={calendars} styles={styles} showFooter="false" />
        </div>
      </div>
    );
  }
}