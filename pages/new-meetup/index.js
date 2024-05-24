// ourDomain.com/new-meetup

import React, { Fragment } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function NewMeetupPage() {

    const addMeetuphandler = (data) => {
        console.log("meetUpFormData", data);
    }

    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={addMeetuphandler} />
        </Fragment>
    )
}

export default NewMeetupPage;