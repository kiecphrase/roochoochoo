# [roochoochoo](https://kiecphrase.github.io/roochoochoo/)

silly little pwa to organize with friends

## general idea

Utilize the power of pwa and basic HTML, CSS, and Javascript to make a functional-enough app that can be downloaded on any mobile device. This allows individuals to help map out their Roo experience and organize with friends

## to do

- get the pwa part working
  - find the origional pwa tutorial I used 2 years ago (done)
- get the basics of the page set up (done with js, css, general html)
- determine data strategy
  - ~~could do cookies maybe depending on how caching would work offline~~
  - ~~maybe do a json~~
  - ~~possibly do a sqlite db? probably overkill~~
  - The solution: localStorage
    - [map iteration](https://stackoverflow.com/questions/69145734/fastest-way-to-loop-through-map-keys)
    - [efficient for looping](https://stackoverflow.com/questions/65534133/javascript-equivalent-to-for-x-in-y)
  
- MVP
  - get total schedule
  - get a way to set what you want to see
  - get a way to share what your schedule is
    - json, iso, something else
- Stretch:
  - make it pretty (done.)
  - user customization?
