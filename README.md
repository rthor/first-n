# First n items

Inspired by Lodash. Get the first item or first `n` items of an array. 

![Travis-CI](https://api.travis-ci.org/rthor/first-n.png)

## Usage

Import the thing using for example node. Easy right?

```javascript
first([192, 168, 0, 24])
// => 192

first([[192, 168], 0, 24])
// => [192, 168]

first(['Hi', 'World', 1337], 2) 
// => ['Hi', 'World']

first([1, 52, 89, 1337], function (num) { return num < 1337; })
// => [1, 52, 89]
```

## The MIT License (MIT)

Copyright (c) 2014 Ragnar Þór Valgeirsson (rthor) http://rthor.is

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.