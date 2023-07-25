import { React, useState } from "react";

const style = {
  text: {
    resize: "none",
  },
};
//localStorage.setItem("thanks", "hideThanks");

export default function Contact() {
  //check if input is valid or not
  const [isValidName, validateName] = useState(true);
  const [isValidEmail, validateEmail] = useState(true);
  const [isValidMsg, validateMsg] = useState(true);
  const [thanks, setThanks] = useState(false);
  // const thanks = localStorage.getItem("thanks");

  if (!thanks) {
    return (
      <div className="bgColor d-flex justify-content-center align-items-center">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const msg = document.getElementById("msg");
            if (
              isValidName === true &&
              isValidEmail === true &&
              isValidMsg === true &&
              name.value !== "".trim() &&
              email.value !== "".trim() &&
              msg.value !== "".trim()
            ) {
              document
                .querySelector("button[type=submit]")
                .setAttribute("disabled", true);
              fetch(
                "https://formsubmit.co/ajax/089a72fd8d98739fcba73e8ee7c900f9",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    message: msg.value,
                    _subject: "Portfolio contact request",
                  }),
                }
              ).then(() => {
                setThanks(true);
                name.value = email.value = msg.value = "";
                document
                  .querySelector("button[type=submit]")
                  .setAttribute("disabled", false);
              });
            }
            return true;
          }}
          className="contentbg p-3 rounded d-flex flex-column shadow mt-4"
        >
          {/* contact form */}
          <h3 className="text-center">Contact</h3>
          <label htmlFor="name">Name{isValidName ? "" : "*"}</label>
          <input
            type="text"
            id="name"
            className={`rounded mb-3 ${isValidName ? "" : "invalid"}`}
            placeholder={isValidName ? "Enter name" : "Name is required"}
            name="Name"
            required
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
          <label htmlFor="email">Email{isValidEmail ? "" : "*"}</label>
          <input
            type="email"
            id="email"
            className={`rounded mb-3 ${isValidEmail ? "" : "invalid"}`}
            placeholder={
              isValidEmail ? "Enter email" : "A valid email is required"
            }
            name="Email"
            required
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
          <label htmlFor="msg">Message{isValidMsg ? "" : "*"}</label>
          <textarea
            id="msg"
            className={`rounded mb-3 ${isValidMsg ? "" : "invalid"}`}
            style={style.text}
            placeholder={
              isValidMsg ? "Type a message!" : "Please type a message >:("
            }
            name="Message"
            required
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
  } else if (thanks) {
    return (
      <div className="container jumbotron mt-5">
        <h1 className="text-center">Thank You!</h1>
        <h3 className="text-center">
          Your contact form has been submitted and
        </h3>
        <h3 className="text-center">
          I will reach out to you as soon as possible.
        </h3>
      </div>
    );
  }
}
