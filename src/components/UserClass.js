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
      <div className="m-4 w-[150] h-[110] bg-slate-900 shadow-2xl rounded-xl">
        <img
          src={avatar_url}
          className="w-20 h-20 rounded-full mx-auto pt-1"
        ></img>
        <h3 className="mx-auto font-semibold text-lg text-center text-white">
          @{login}
        </h3>
      </div>
    );
  }
}

export default UserClass;
