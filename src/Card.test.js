import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


//smoke test: 

test ('it renders without crashing', () =>{
    //selecting object from test images array:
    const testImage = TEST_IMAGES[0];
    render(
        <Card
            caption = {testImage.caption}
            src = {testImage.src}
            currNum = {1}
            totalNum = {TEST_IMAGES.length}
        />)
  })
  

//snapshot test:

it ("matches snapshot", () =>{
    //selecting object from test images array:
    const testImage = TEST_IMAGES[0];
    const {asFragment} = render(
    <Card
        caption = {testImage.caption}
        src = {testImage.src}
        currNum = {1}
        totalNum = {TEST_IMAGES.length}
     />);
    expect(asFragment()).toMatchSnapshot()
})
     
