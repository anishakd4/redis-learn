# Unix date time format

[<img src="./pictures/unix_time_format.png" width="50%"/>](./pictures/unix_time_format.png)

# Pipeline

[<img src="./pictures/pipeline_scenario.png" width="50%"/>](./pictures/pipeline_scenario.png)

[<img src="./pictures/pipeline_solution_1.png" width="50%"/>](./pictures/pipeline_solution_1.png)

- We would definitely fetch all the data we're looking for, but there's a very clear downside. We are making a wide variety of different separate requests off to Redis, and so that's just going to take some amount of time if we are trying to fetch, say, 100 different records. We're talking about making 100 different requests over to Redis, though probably not going to be very ideal.

[<img src="./pictures/pipeline_solution_2.png" width="50%"/>](./pictures/pipeline_solution_2.png)

- So in one single connection, we can send off this big group of different `hgetall`, one for each individual cars that we're trying to fetch. Redis understands this idea of batching commands together.

# Sets

[<img src="./pictures/sets.png" width="50%"/>](./pictures/sets.png)

[<img src="./pictures/set_commands.png" width="50%"/>](./pictures/set_commands.png)

[<img src="./pictures/sadd.png" width="50%"/>](./pictures/sadd.png)

[<img src="./pictures/smembers.png" width="50%"/>](./pictures/smembers.png)
