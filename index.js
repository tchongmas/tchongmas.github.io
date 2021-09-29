'use strict';

const el = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false
    };
  }

  render() {
    return el(
      "h1", null, "Hello world!"
    )
  }
}

ReactDOM.render(
  el(App),
  document.getElementById('root')
);