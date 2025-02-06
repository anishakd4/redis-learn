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

[<img src="./pictures/scard.png" width="50%"/>](./pictures/scard.png)

`SCARD colors:1`
`SCARD colors:2`
`SCARD numbers`

[<img src="./pictures/srem.png" width="50%"/>](./pictures/srem.png)

`SREM colors:1 red`
`SMEMBERS colors:1`

[<img src="./pictures/sscan.png" width="50%"/>](./pictures/sscan.png)

[<img src="./pictures/sscan_doc.png" width="50%"/>](./pictures/sscan_doc.png)

`SSCAN colors:2 0 COUNT 2`

# Sets uses

[<img src="./pictures/set_uses.png" width="50%"/>](./pictures/set_uses.png)

[<img src="./pictures/set_use_case_1.png" width="50%"/>](./pictures/set_use_case_1.png)

[<img src="./pictures/set_use_case_2.png" width="50%"/>](./pictures/set_use_case_2.png)

[<img src="./pictures/set_use_case_3.png" width="50%"/>](./pictures/set_use_case_3.png)

# Sorted sets

[<img src="./pictures/sorted_sets.png" width="50%"/>](./pictures/sorted_sets.png)

- scores will always be numbers.

[<img src="./pictures/zadd_zscore.png" width="50%"/>](./pictures/zadd_zscore.png)

`ZADD products 45 monitor`

`ZSCORE products monitor`

- keep in mind that as we stored numbers inside of lettuce, all the implication here is that these are kind of being treated like strings. So when we get our score back, it is going to come back to us as a string. So for whatever different client library we are using, we might have to take that string and parse it into a number.

[<img src="./pictures/zrem.png" width="50%"/>](./pictures/zrem.pngg)

`ZREM products monitor`
`ZSCORE products monitor`

[<img src="./pictures/zadd_Arguments.png" width="50%"/>](./pictures/zadd_Arguments.png)

- There are a variety of different arguments that we can append on to the ZADD command.

[<img src="./pictures/zcard_zcount.png" width="50%"/>](./pictures/zcard_zcount.png)

[<img src="./pictures/zcount_1.png" width="50%"/>](./pictures/zcount_1.png)

[<img src="./pictures/zcount_2.png" width="50%"/>](./pictures/zcount_2.png)

`ZCARD products`
`ZADD products 45 cpu`
`ZADD products 10 keyboard`
`ZADD products 55 power`
`ZCARD products`
`ZCOUNT products 0 50`
`ZCOUNT products (0 (55`
`ZCOUNT products 15 +inf`
