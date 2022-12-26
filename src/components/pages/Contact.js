import { React, useState } from "react";

const style = {
  text: {
    resize: "none",
  },
};

export default function Contact() {
  //check if input is valid or not
  const [isValidName, validateName] = useState(true);
  const [isValidEmail, validateEmail] = useState(true);
  const [isValidMsg, validateMsg] = useState(true);

  return (
    <div className="bgColor d-flex justify-content-center align-items-center center">
      <form className="contentbg p-4 rounded d-flex flex-column shadow w-25">
        <h3 className="text-center">Contact</h3>
        <label for="name">Name{isValidName ? "" : "*"}</label>
        <input
          type="text"
          id="name"
          className={`rounded mb-3 ${isValidName ? "" : "invalid"}`}
          placeholder={isValidName ? "Enter name" : "Name is required"}
          //once clicked, when clicked out of input field check if input is valid
          onClick={() => {
            const name = document.getElementById("name");
            name.addEventListener(
              "focusout",
              () => {
                name.value === "".trim()
                  ? validateName(!isValidName)
                  : validateName(isValidName);
                return;
              },
              { once: true }
            );
          }}
          //when input is in focus remove invalidation error
          onFocus={() =>
            isValidName ? isValidName : validateName(!isValidName)
          }
        />
        <label for="email">Email{isValidEmail ? "" : "*"}</label>
        <input
          type="email"
          id="email"
          className={`rounded mb-3 ${isValidEmail ? "" : "invalid"}`}
          placeholder={
            isValidEmail ? "Enter email" : "A valid email is required"
          }
          //check email against regex to see if it is a valid email
          onClick={() => {
            const email = document.getElementById("email");
            email.addEventListener(
              "focusout",
              () => {
                const RegEx =
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (RegEx.test(email.value)) {
                  validateEmail(isValidEmail);
                } else {
                  email.value = "";
                  validateEmail(!isValidEmail);
                }
              },
              { once: true }
            );
          }}
          //when input is in focus remove invalidation error
          onFocus={() =>
            isValidEmail ? isValidEmail : validateEmail(!isValidEmail)
          }
        />
        <label for="msg">Message{isValidMsg ? "" : "*"}</label>
        <textarea
          id="msg"
          className={`rounded mb-3 ${isValidMsg ? "" : "invalid"}`}
          style={style.text}
          placeholder={
            isValidMsg ? "Type a message!" : "Please type a message >:("
          }
          //when input is out of focus check if it is valid
          onClick={() => {
            const msg = document.getElementById("msg");
            msg.addEventListener(
              "focusout",
              () => {
                msg.value === "".trim()
                  ? validateMsg(!isValidMsg)
                  : validateMsg(isValidMsg);
              },
              { once: true }
            );
          }}
          //remove invalidation error when textarea is in focus
          onFocus={() => (isValidMsg ? isValidMsg : validateMsg(!isValidMsg))}
        />
        <br></br>
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-50 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
//needs to validate info when i click off form
