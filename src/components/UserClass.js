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
    const {
      firstName,
      lastName,
      age,
      gender,
      email,
      phone,
      username,
      birthDate,
      image,
      bloodGroup,
      address: { address, city, postalCode, state },
    } = this.props.data;
    return (
      <div className="m-4 w-[250] h-[250] bg-slate-900 shadow-2xl rounded-xl">
        <div className="flex">
          <div>
            <img
              src={image}
              className="w-24 h-24 rounded-full mx-auto pt-1"
            ></img>
          </div>
          <div>
            <h3 className="mx-auto mt-3 font-semibold text-2xl text-left text-white">
              {firstName + " " + lastName}
            </h3>
            <p className="mx-auto font-normal text-md text-left text-white">
              {age + " / " + gender.toUpperCase()}
              {gender == "male" ? " 👱🏻‍♂️" : " 👱🏻‍♀️"}
            </p>
            <p className="mx-auto font-normal text-md text-left text-white">
              {"🎂 : " + birthDate}
            </p>
            <p className="mx-auto font-normal text-md text-left text-white">
              {"🩸 : " + bloodGroup}
            </p>
          </div>
          <hr></hr>
        </div>
        <div>
          <p className="mx-3 font-normal text-md text-left text-white">
            {"👤 : " + username}
          </p>
          <p className="mx-3 font-normal text-md text-left text-white">
            {"✉️ : " + email}
          </p>
          <p className="mx-3 font-normal text-md text-left text-white">
            {"📱 : " + phone}
          </p>
          <p className="mx-3 font-normal text-md text-left text-white">
            {"🏠 : " + address + ", " + city + ", " + postalCode + ", " + state}
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
