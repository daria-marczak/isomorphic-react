import React from "react";
import TagsList from "../TagsList";
import renderer from "react-test-renderer";

describe("Tags list", () => {
  it("renders as expected", () => {
    const tree = renderer
      .create(<TagsList tags={["css", "html", "swift"]}/>)
      .toJSON();

      expect(tree).toMatchSnapshot();
  });
});