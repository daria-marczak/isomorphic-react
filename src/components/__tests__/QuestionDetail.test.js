import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe("The question detail component", () => {
  describe("container element", () => {
    describe("mapstateToProps", () => {
      it("should map the state to props correctly", () => {

        const sampleQuestion = {
          question_id: 42,
          body: "Lorem ipsum"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };
        const componentState = mapStateToProps(appState, ownProps);
        expect(componentState).toEqual(sampleQuestion);
      });
    });
  });

  describe("The display element", () => {
    it("should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="Something"
          body="Whatever"
          answer_count={5}
          tags={["blah blah"]}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});