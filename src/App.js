import React from "react";

import { Hook, Console, Decode } from "console-feed";

import {
  GetBoardsButton,
  GetThumbnailButton,
  CreateBoardButton,
  LookupBoardButton,
  ListOperationsButton,
  DeleteBoardButton,
} from "./Aww";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logs: [] };
  }

  componentDidMount() {
    // SEE: Console-Feed documentation (online)
    Hook(window.console, (log) => {
      this.setState(({ logs }) => ({ logs: [...logs, Decode(log)] }));
    });

    console.log("hello, world");
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <h4>YuJin Kim</h4>
        <p>
          The purpose of this app is to demonstrate managing a AwwApp instance
          hosted at AwwApp.
        </p>
        <GetBoardsButton />
        <GetThumbnailButton />
        <CreateBoardButton />
        <LookupBoardButton />
        <ListOperationsButton />
        <DeleteBoardButton />
        <Console logs={this.state.logs} variant="light" />
      </div>
    );
  }
}

export default App;
