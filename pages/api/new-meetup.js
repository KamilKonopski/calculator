import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const data = req.body;

		const client = await MongoClient.connect(
			"mongodb+srv://MaerS:<password>@cluster0.jhdjp2o.mongodb.net/?retryWrites=true&w=majority"
		);
		const db = client.db();

		const meetupsCollection = db.collection("meetups");

		const result = await meetupsCollection.insertOne(data);

		client.close();

		res;
	}
}

export default handler;
