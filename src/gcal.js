import request from 'superagent'
const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
require('dotenv').config();

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          var sDate = new Date(event.start.date || event.start.dateTime);
          var eDate = new Date(event.end.date || event.end.dateTime);
          events.push({
            start: sDate,
            end: eDate,
            title: event.summary,
              htmlLink: event.htmlLink,
          })
        })
        callback(events)
      }
    })
}
