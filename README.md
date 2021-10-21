# Reduce: 10 Different Examples. JavaScript Fundamentals.
by: Leigh Halliday Apr 24, 2020:
https://www.youtube.com/watch?v=NiLUGy1Mh4U


## Implement the following use cases on the ```people``` array using ```reduce()```

1. count
2. sum ages
3. array of names (map)
4. convert to id => person lookup (dict)
5. max age
5. min age
6. find by name
6. all over 18
6. any over 18
6. count occurrences
6. flatten
6. create reduce ourselves

### ```reduce()``` takes in a callback function and an initial value
#### ex: ```result = people.reduce((acc, el) => {}, 0);```
    * callback takes an accumulator and current element
        * accumulater is a value passed from one call of the callback to the next
    * init value = 0
    * if init value is not passed, init value is set as 1st element of the array