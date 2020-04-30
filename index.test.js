import React from 'react'
import TestRenderer from 'react-test-renderer';

/*
Unit 2:1 - Applied JavaScript

Write a function called "divMaker".
It takes an "attributes" object as the first argument,
and a string "textContent" as the second argument.
It returns a "div" element with the correct attributes and text content.

Example of usage:

const div = divMaker({ id: 'greet' }, 'Hello, World')
console.log(div) // <div id="greet">Hello, World</div>

*/
function divMaker(attributes, textContent) {
  const div = document.createElement('div')
  for (let attr in attributes) {
    div.setAttribute(attr, attributes[attr])
  }
  div.textContent = textContent
  return div
}

describe('Unit 2:1 - Applied JavaScript', () => {
  test('divMaker', () => {
    const div = divMaker({ id: 'foo', class: 'bar baz' }, 'lady gaga')

    expect(div.id).toBe('foo')
    expect(div.textContent).toBe('lady gaga')
    expect(div.classList.value).toBe('bar baz')
  })
})

/*
Unit 2:2 - Intro to React

Write a function called "divMaker".
It takes an "attributes" object as the first argument,
and a string "textContent" as the second argument.
It returns a "div" element with the correct attributes and text content.

Example of usage:

const div = divMaker({ id: 'greet' }, 'Hello, World')
console.log(div) // <div id="greet">Hello, World</div>

*/
