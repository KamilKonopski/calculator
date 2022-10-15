import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
	return (
		<MeetupDetail
			image="https://upload.wikimedia.org/wikipedia/commons/0/05/PKiN_widziany_z_WFC.jpg"
			title="First Meetup"
			address="street 8, Warsaw"
			description="This is a first meetup"
		/>
	);
}

export async function getStaticProps(context) {
	// fetch data for a single meetup

	const meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					"https://upload.wikimedia.org/wikipedia/commons/0/05/PKiN_widziany_z_WFC.jpg",
				title: "First Meetup",
				address: "street 8, Warsaw",
				description: "This is a first meetup",
			},
		},
	};
}

export default MeetupDetails;
