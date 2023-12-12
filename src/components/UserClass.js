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
    const { name, avatar_url, login } = this.props.data;
    return (
      <div className="user-card">
        <div className="contact-card">
          <img src={avatar_url} width="80px" height="80px" marigin="10"></img>
          <h3>@{login}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
