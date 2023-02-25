import React, { Component } from "react";
import "./Form.css";
import { FiSend } from "react-icons/fi";
import { frameworks, levels, learningType } from "../util/data";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      framework: "React",
      level: "Basic",
      learningTypes: ["Fundamentals"],
      likeThis: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("value", value);
    this.setState({
      [name]: value,
    });
  };
  
  handleCheckBox = (event) => {

      console.log(typeof event.target);
      const {
        name,value,checked 

      }= event.target;
      console.log(checked);
      if (checked){
        this.setState({
          learningTypes: [... this.state.learningTypes,value]
        })
      }
      else{
        console.log(this.state.learningTypes.filter((e)=>e!==value),value)
        this.setState({
          learningTypes: this.state.learningTypes.filter((e)=>e!==value)

        })

      }
  }
  handleSubmit = () => {
    alert("Successfully");
    console.log("Checkout State", this.state);
  };

  render() {
    console.log("State", this.state);
    const {
      firstName,
      lastName,
      email,
      phone,
      framework,
      level,
      learningTypes,
      likeThis,
    } = this.state;


    return (
      <div className="bgStyle">
        <form onSubmit={this.handleSubmit}>
          <div className="formStyle">
            <div className="sendCircle">
              <FiSend className="send_icon" />
            </div>
            <p className="head">Hello!!!</p>
            <div className="fullName">
              <div>
                <label className="label">First Name</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div>
                <label className="label">Last Name</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div>
              <label className="label">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="label">Mobile Number</label>
              <br />
              <input
                type="number"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label className="label">
                Which framework is that you learn?
              </label>
              <br />
              <select
                value={framework}
                name="framework"
                onChange={this.handleChange}
              >
                {frameworks.map((e) => (
                  <option key={e.id}>{e.value}</option>
                ))}
              </select>
            </div>
            <div className="label">
              <label>Level</label>
              <br />
              <div className="wrapper">
                {levels.map((e) => (
                  <div key={e.id} className="wrapperInner">
                    <input
                      type="radio"
                      name="level"
                      value={e.name}
                      defaultChecked={level && e.name == level}
                      onChange={this.handleChange}
                    />
                    <label>{e.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="label">
              <label>Which learning type?</label>
              <br />
              <div className="wrapper">
                {learningType.map((e) => (
                  <div key={e.id} className="wrapperInner">
                    <input
                      type="checkbox"
                      name={e.name}
                      value={e.name}
                      onChange= {this.handleCheckBox}
                      defaultChecked={
                        learningTypes && learningTypes.includes(e.name)
                      }
                    />
                    <label>{e.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className="label">Why like this?</label>
              <br />
              <textarea
                row="50"
                value={likeThis}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div>
              <button className="button" type="submit" >
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
