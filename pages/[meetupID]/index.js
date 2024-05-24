import React, { Fragment } from 'react'
import MeetupDetails from '../../components/meetups/MeetupDetails'

function MeetupDetailsPage() {
  return (
    <Fragment>
      <MeetupDetails
        image={"https://www.meetup.com/_next/image/?url=%2Fimages%2Fcity%2Fdescriptions%2Fnew_york.jpg&w=640&q=75"}
        title={"First Meet Up"}
        address={"First Meetup Address"}
        description={"The Meetup Description"}
      />
    </Fragment>
  )
}

export default MeetupDetailsPage