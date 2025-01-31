`SET message 'Hi there!'`

- command that's going to save a simple string inside of our database.
- We've got a key of message and if we ever refer to that variable or that key name in the future, we're going to get back a string of "Hi there".
- After saving that data reticence back in response to us of OC, which simply means okay, the data has been saved successfully.

`GET message`

- if I then want to retrieve information that I have stored.

## GET and SET

- Now the get and set commands that we just made use of are two very simple commands that are intended only for storing plane strings and plane numbers.
- there are many other types of data that we can store inside of Redis.

[<img src="./pictures/data_types_redis.png" width="50%"/>](./pictures/data_types_redis.png)

## SET

[<img src="./pictures/set_command.png" width="50%"/>](./pictures/set_command.png)

`SET color red`

- returns ok

`SET color red`
`SET color green GET`

- returns last value red

[<img src="./pictures/set_xx.png" width="50%"/>](./pictures/set_xx.png)

`SET asdf 'sdfsfd ghjk' XX`

- returns null because `XX` means set this value only if the key already exists.

[<img src="./pictures/set_nx.png" width="50%"/>](./pictures/set_nx.png)

`SET color blue NX`

- returns null because `NX` means set this value only if the key doesn't already exists.

`SET color red EX 2`
`GET color`

- color key will expire in 2 seconds so if get within 2 seconds we will get the value

`GET color`

- If we get after 2 seconds then we will get null value.
