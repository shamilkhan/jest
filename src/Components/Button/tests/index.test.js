import React from 'react';
import Button from '../index';
import renderer from 'react-test-renderer';

it('renders <Button /> correctlys', () => {
  const tree = renderer
    .create(<Button text="test"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// it("<Button> component shows the same with props.text and props.children", () => {
//   const btn1 = renderer.create(<Button text="test"/>).toJSON();
//   const btn2 = renderer.create(<Button>test</Button>).toJSON();
//   expect(btn1).toMatchSnapshot();
//   expect(btn2).toMatchSnapshot();
//   expect(btn1).toEqual(btn2);
// });

