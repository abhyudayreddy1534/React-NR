import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [{ name: "dummy", login: "@dummy" }],
    };
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users");
    // const json = await data.json();
    // // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
  }

  render() {
    const { name, location, login } = this.props.data;
    return (
      <div className="user-card">
        {/* {this.state.userInfo.map((u) => ( */}
        <h2>contact: @{login}</h2>
        {/* ))} */}
      </div>
    );
  }
}

export default UserClass;
