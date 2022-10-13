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

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
