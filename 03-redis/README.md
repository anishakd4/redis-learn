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

`SADD colors red`

`SADD colors green`

- If a set does not already exist there, one will be created and we will add the key `red` to it. If we have already got a set with the string red inside of it, and then I run that command again, again and again, no changes will be made my sets, because I've already got the string `red` inside there.
- when we run the `sadd`, if we get back a `one`, that means an element was added. If we get back a 0, it means that that element already exists inside the set.

`SADD numbers 4`

- remember, numbers are treated in a very similar fashion as strings inside of redis. So I can add in numbers to a set as well.

`SMEMBERS colors`

`SMEMBERS numbers`

`SADD colors:1 red blue orange`

`SADD colors:2 blue green purple`

`SADD colors:3 blue red purple`

[<img src="./pictures/sunion.png" width="50%"/>](./pictures/sunion.png)

`SUNION colors:1 colors:2 colors:3`

[<img src="./pictures/sinter.png" width="50%"/>](./pictures/sinter.png)

`SINTER colors:1 colors:2 colors:3`

[<img src="./pictures/sdiff.png" width="50%"/>](./pictures/sdiff.png)

`SDIFF colors:1 colors:2 colors:3`

- the order of keys that you put in here makes a difference on the output. With `SINTER` and `SUNION` the order of keys we provide doesn't make any difference whatsoever. But because `SDIFF` is going to look at elements that are in the first set and no others really comes down to what is the first set that we are referencing.

`SINTERSTORE colors:results colors:1 colors:2 colors:3`

`SMEMBERS colors:results`

- `SINTERSTORE` `SUNIONSTORE` `SDIFFSTORE` perform the same underlying operation as `SINTER` `SDIFF` `SUNIION` but these also store the results in a new key.

[<img src="./pictures/sismember.png" width="50%"/>](./pictures/sismember.png)

`SISMEMBER colors:1 red`
`SISMEMBER colors: 1 purple`

[<img src="./pictures/smismember.png" width="50%"/>](./pictures/smismember.png)

`SMISMEMBER colors:1 red green blue`

- The interesting thing here is that we are not going to get a result saying if any individual, one or all of them together inside of a set, we get back an array of results and the array says 1 if it is present, 0 if it's not.
