import React from "react";
import HomePage from "./HomePage";
import { Helmet } from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  render() {
    return (
      <div>
        <header>
          <Helmet>
            <title>housemeet</title>
          </Helmet>
        </header>
        ;<Home />
      </div>
    );
  }
}

function Home() {
  return HomePage;
}

export default App;
