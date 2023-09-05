"use client";

import { useState } from "react";
import validateContactForm from "../utils/validateContactForm";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [mailingListYes, setMailingListYes] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const createUser = (e) => {
    e.preventDefault();
    const resetValues = () => {
      setName("");
      setEmail("");
      setComments("");
      setMailingListYes(false);
      setFormSubmitted(!formSubmitted);
    };
    const errors = validateContactForm({
      name,
      email,
      comments,
      mailingListYes,
    });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    let id = 0;
    fetch("https://sheetdb.io/api/v1/8exs0dgt0peut", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id,
            name,
            email,
            comments,
            mailingListYes,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    resetValues();
  };

  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-white form-container pt-20">
      <div className="flex justify-center">
        <h1 className=" text-white text-5xl mb-10 fadeIn3s">
          {!formSubmitted ? "Get In Touch" : "Form Submitted!"}
        </h1>
      </div>
      {!formSubmitted ? (
        <form className="max-w-[800px] m-auto" onSubmit={createUser}>
          <div className="grid sm:grid-cols-2 gap-3 fadeIn4s">
            <input
              type="text"
              className="p-3 text-black"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {formErrors.name && (
              <div className="text-red-500">{formErrors.name}</div>
            )}
            <input
              type="text"
              className="p-3 text-black"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {formErrors.email && (
              <div className="text-red-500">{formErrors.email}</div>
            )}
          </div>
          <div>
            <textarea
              className="w-full my-4 text-black fadeIn5s"
              cols="30"
              rows="10"
              placeholder="Enter Comments Here"
              onChange={(e) => setComments(e.target.value)}
              value={comments}
            ></textarea>
          </div>
          <div className="md:flex md:flex-row items-center">
            <p className="fadeIn6s mb-2 sm:mb-0 md:mr-8 sm:whitespace-nowrap">
              Would you like to be added to our mailing list?
            </p>
            <label htmlFor="mailing-list-yes" className="fadeIn6s mr-2 md:mr-1">
              Yes
            </label>

            <input
              type="checkbox"
              id="mailing-list-yes"
              name="mailing-list"
              onChange={(e) => setMailingListYes(e.target.checked)}
              checked={mailingListYes}
              className="fadeIn7s"
            />
          </div>
          <div className="mt-5 md:mt-10 bg-white w-1/4 h-10 flex border-r-2 justify-center fadeIn8s">
            <button type="submit" className="text-black font-semibold">
              Submit
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default Contact;
