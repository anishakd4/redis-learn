import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', { color: 'red', year: 1950 });
	const car = await client.hGetAll('car');

	const car2 = await client.hGetAll('car23424332');

	console.log({ car });

	console.log({ car2 });
};
run();
