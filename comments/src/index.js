import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" time="Today at 6:00 pm" comment="Hey" />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          time="Yesterday at 9:00 am"
          comment="Hello!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Amlan"
          time="Wednesday at 4:00 am"
          comment="Hi everyone!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
