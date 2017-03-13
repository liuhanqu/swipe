# Usage

```
html

<div class="container">
  <div class="wrapper">
    <div class="slide">1</div>
    <div class="slide">2</div>
    <div class="slide">3</div>
    <div class="slide">4</div>
    <div class="slide">5</div>
  </div>
</div>
```
```
css

.container {
  overflow: hidden;
}
.wrapper {
  overflow: hidden;
  position: relative;
}
.slide {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```
```
js

const container = document.querySelector('.container')
const instance = new Swipe(container, {})
instance.init()
```
# Config
#### container: &nbsp; HTML element
#### options.index: &nbsp; integer
default: &nbsp;0, position of slide

#### options.continuous: &nbsp; boolean
default: &nbsp;true

true --> infinite slide

false --> finite slide
#### dots: &nbsp; Boolean
default: &nbsp;true

true --> show pagination

false --> no pagination
#### duration: &nbsp; integer
default: &nbsp;300

transition duration
#### interval: &nbsp; integer
default: &nbsp; 3500

0 --> not auto slide

positive integer --> interval to auto slide

#### callback: &nbsp; function
default: &nbsp;no action

callback function after slide successfullly

# License
License: MIT (See LICENSE file for details)
