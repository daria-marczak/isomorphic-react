import { mapStateToProps } from "../QuestionDetail";

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
});