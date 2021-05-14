import request from 'superagent'
const CALENDAR_ID = "821938813709-9vr330gukq38vk9shmjv8o91i0mr31dt.apps.googleusercontent.com"
const API_KEY = "AIzaSyBL44k_zsAIvE1CcPEgiRSr5zynEEKM7KM"
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}
