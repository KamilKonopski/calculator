import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/0/05/PKiN_widziany_z_WFC.jpg",
		address: "plac Defilad 1, 00-901 Warsaw",
		description: "This is a first meetup",
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/0/05/PKiN_widziany_z_WFC.jpg",
		address: "plac Defilad 1, 00-901 Warsaw",
		description: "This is a second meetup",
	},
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
	const client = await MongoClient.connect(`${process.env.REACT_APP_API_KEY}`);
	const db = client.db();

	const meetupsCollection = db.collection("meetups");

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			})),
		},
		revalidate: 1,
	};
}

export default HomePage;
