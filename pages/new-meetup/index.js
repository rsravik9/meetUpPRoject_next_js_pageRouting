// ourDomain.com/new-meetup

import React, { Fragment } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router';
function NewMeetupPage() {
    const route = useRouter()
    const addMeetuphandler = async (data) => {
        console.log("meetUpFormData", data);
        const response = await fetch('/api/new-meetup', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const responseData = await response.json()
        console.log("response Data", responseData)
        route.push("/")
    }

    return (
        <Fragment>
            <NewMeetupForm onAddMeetup={addMeetuphandler} />
        </Fragment>
    )
}

export default NewMeetupPage;