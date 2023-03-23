import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestArr } from "../../../utils";

const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe("Header Component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});
	it("should render without errors", () => {
		//console.log(component.debug());
		const wrapper = findByTestArr(component, "headerComponent");
		expect(wrapper.length).toBe(1);
	});
	it("should render a logo image", () => {
		const logo = findByTestArr(component, "logoIMG");
		expect(logo.length).toBe(1);
	});
});
