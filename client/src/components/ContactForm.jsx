import { useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Form from "react-bootstrap/Form";
import axios from "axios";

function ContactForm() {
  const [nameIsClicked, setNameIsClicked] = useState(false);
  const [emailIsClicked, setEmailIsClicked] = useState(false);
  const [msgIsClicked, setMsgIsClicked] = useState(false);
  // email
  const [subject, setSubject] = useState("");
  const [receipient_email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMail() {
    if (receipient_email && subject && message) {
      axios
        .post("https://muaz-portfolio-56c8.vercel.app/api/send_email", {
          receipient_email,
          subject,
          message,
        })
        .then(() => alert("Message Send Successfully"))
        .catch(() => alert("Message failed to send"));
      return;
    }
    return alert("Fill in all the fields to continue");
  }
  return (
    <>
      <div className="contactFormContainer d-md-flex align-items-center justify-content-center flex-column">
        <h2 className="text-blue bold text-center"> me a message!</h2>
        <p className="text-center">want to say hello? Go ahead.</p>
        <Form className="mt-4">
          <div className="nameEmailContainer d-md-flex justify-content-between">
            {/* name ------------------- */}
            <Form.Group
              className={`mb-4 form-group nameInput ${
                nameIsClicked ? "clickedInput" : ""
              }`}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label
                className={`form-label ${nameIsClicked ? "clickedLabel" : ""}`}
              >
                Your Name{" "}
              </Form.Label>
              <Form.Control
                type="name"
                className={`bg-transparent border-top-0 border-end-0 border-start-0 rounded-0 custom-input ${
                  nameIsClicked ? "clickedLabel" : ""
                } `}
                onBlur={() => setNameIsClicked(false)}
                onFocus={() => setNameIsClicked(true)}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter your Name"
              />
            </Form.Group>
            {/* email ------------------------------ */}
            <Form.Group
              className={`mb-4 form-group emailInput ${
                emailIsClicked ? "clickedInput" : ""
              }`}
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label
                className={`form-label ${emailIsClicked ? "clickedLabel" : ""}`}
              >
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                className={`bg-transparent border-top-0 border-end-0 border-start-0 rounded-0 custom-input ${
                  emailIsClicked ? "clickedLabel" : ""
                }`}
                onBlur={() => setEmailIsClicked(false)}
                onFocus={() => setEmailIsClicked(true)}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </Form.Group>
          </div>
          {/* message --------------------------- */}
          <Form.Group
            className={`mb-4 form-group ${msgIsClicked ? "clickedInput" : ""}`}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label
              className={`form-label ${msgIsClicked ? "clickedLabel" : ""}`}
            >
              Message
            </Form.Label>
            <Form.Control
              placeholder="Hi Muaz, I wanna have a discussion with you about my product......."
              className={`bg-transparent border-top-0 border-end-0 border-start-0 rounded-0 custom-input textArea ${
                msgIsClicked ? "clickedLabel" : ""
              }`}
              onBlur={() => setMsgIsClicked(false)}
              onFocus={() => setMsgIsClicked(true)}
              onChange={(e) => setMessage(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <button
            onClick={() => sendMail()}
            type="button"
            className="sendButton py-2 py-md-3 px-4 mb-4 rounded-0 d-md-block"
          >
            <span className="button px-2 bold">SEND</span>
            <HiArrowLongRight />
          </button>
        </Form>
      </div>
    </>
  );
}

export default ContactForm;
