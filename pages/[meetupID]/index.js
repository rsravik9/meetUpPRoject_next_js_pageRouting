import React, { Fragment } from 'react'
import MeetupDetails from '../../components/meetups/MeetupDetails'

function MeetupDetailsPage(props) {
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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupID: "1"
        },
        params: {
          meetupID: "2"
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupID = context.params.meetupID
  console.log('meetupID', meetupID);
  return {
    props: {
      meetupData: {
        id: "1",
        image: "https://www.meetup.com/_next/image/?url=%2Fimages%2Fcity%2Fdescriptions%2Fnew_york.jpg&w=640&q=75",
        title: "First Meet Up",
        address: "First Meetup Address",
        description: "The Meetup Description",
      }
    }
  }
}

export default MeetupDetailsPage