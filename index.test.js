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
  test('divMaker works', () => {
    const div = divMaker({ id: 'foo', class: 'bar baz' }, 'lady gaga')

    expect(div.id).toBe('foo')
    expect(div.textContent).toBe('lady gaga')
    expect(div.classList.value).toBe('bar baz')
  })
})

/*
Unit 2:2 - Intro to React

1- Write a React component called "LightSwitch".

It receives a single prop called "on".
If "on" has a value of true, the component returns a "p" tag with the text "The switch is on!".
If "on" has a value of false, the component returns a "p" tag with the text "The switch is off".

2- Write a second React component called "Switches".

It expects a "number" prop which is a number.
It returns one "div" tag containing "n" LightSwitches, where "n" is equal to the value of "number".
If "n" is an even number, all LightSwitches are on. Otherwise all LightSwitches are off.
*/
function LightSwitch({ on }) {
  return <p>{on ? 'The switch is on!' : 'The switch is off'}</p>
}

function Switches({ number }) {
  const switches = Array.from(Array(number).keys())
  return <div>{switches.map((_, idx) =>
    <LightSwitch key={idx} on={number % 2 === 0} />)}</div>
}

describe('Unit 2:2 - Intro to React', () => {
  test('Switches works with even number', () => {
    const element = TestRenderer.create(<Switches number={4} />).toJSON()

    element.children[0].children.forEach(text => {
      expect(text).toMatch(/on/i)
    })
    expect(element.children).toHaveLength(4)
  })

  test('Switches works with odd number', () => {
    const element = TestRenderer.create(<Switches number={3} />).toJSON()

    expect(element.children).toHaveLength(3)
    element.children[0].children.forEach(text => {
      expect(text).toMatch(/off/i)
    })
  })
})

/*
Unit 2:3 - Single Page Applications

Write a React component called "TrimmedInput".

It receives a prop called "value" (a string) and another called "type" (a string).
It returns a single input of the specified "type".
The value of the input must be the supplied "value" prop
with any leading and trailing whitespace trimmed out.
*/
function TrimmedInput({ type, value }) {
  return <input type={type} value={value.trim()} />
}

describe('Unit 2:3 - Single Page Applications', () => {
  test('TrimmedInput works', () => {
    const element = TestRenderer.create(
      <TrimmedInput type="text" value="  foo  " />
    ).toJSON()

    expect(element.props.value).toEqual('foo')
    expect(element.props.type).toEqual('text')
  })
})
