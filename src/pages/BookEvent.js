import React from "react";

import bookingPoster from "../assets/images/Bookings.png";

import '../assets/styles/booking.css';

const BookEvent = () => {
  return (
    <main className="centered-bottom" id="main" role="main">
      <div className="main section" id="page_body" name="Page Body">
        <h3 className="post-title entry-title">
          Book Your Event
        </h3>
        <div className="post-body-container">
          <img src={bookingPoster} alt="bookings poster"/>
          <div>
            <a href="https://my.setmore.com/bookanappointmentv3.do?uniqueKey=d17471a9-0a65-4a79-b3ac-3065eff617f8" target="_blank" rel="noopener noreferrer"><button className="appointment-button">Book Weekday Appointment</button></a>
            <p>WEEKEND APPOINTMENTS</p>
            <p>For weekend appointments, please send an email to <a href>annawonw@gmail.com</a> and arrange for your weekend appointment by email.</p>
            <div>
              <h3>Kutaputash</h3>
              <h3>(Thank You)</h3>
            </div>
            <div>
              <iframe frameBorder="0" height="600" title="this a title" scrolling="no" src="https://calendar.google.com/calendar/embed?title=First%20Light%20Fun%20&amp;height=600&amp;wkst=1&amp;bgcolor=%23cc33cc&amp;src=ne64e8t3a1r26hqfipd5s4iuvg%40group.calendar.google.com&amp;color=%23853104&amp;ctz=America%2FNew_York" width="600"></iframe>
            </div>
          </div>
        </div>
      </div >
    </main >
  )
}

export default BookEvent;