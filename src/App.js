import React from "react";
import "./App.css";
import Recepie from "./components/Recepie";
import { apiRequest } from "./apiRequest";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: "pasta",
      recepies: [],
    };
  }

  //handle search
  handleRecepieSearch = (e) => {
    this.setState({ searchString: e.target.value });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const results = await apiRequest(this.state.searchString);
    this.setState({ recepies: results, searchString: "" });
  };

  async componentDidMount() {
    const results = await apiRequest();
    this.setState({ recepies: results });
  }

  render() {
    const { recepies } = this.state;
    return (
      <>
        <div className="main-container">
          <h1 class="heading container pt-4 pb-2">Explore! new Recepies</h1>

          <form className="container" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={this.state.searchString}
                className="form-control"
                placeholder="Foodie! find a recepie"
                onChange={this.handleRecepieSearch}
              ></input>
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </div>
          </form>

          <div className="container">
            <div id="parent" class="card-deck">
              <Recepie recepies={recepies} />
            </div>
          </div>
        </div>
        <div className="footer">
          <h2>Thanks for visiting</h2>
        </div>
      </>
    );
  }
}

export default App;
