"use client";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [mailingListYes, setMailingListYes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  return (
    <div className="pt-5 max-w-[1240px] text-white">
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            type="text"
            className="p-3 text-black"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            type="text"
            className="p-3 text-black"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <textarea
            className="w-full my-4 text-black"
            cols="30"
            rows="10"
            placeholder="Enter Comments Here"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
          ></textarea>
        </div>
        <p className="mb-2">Would you like to be added to our mailing list?</p>
        <label htmlFor="mailing-list-yes" className="mr-2">
          Yes
        </label>
        <input
          type="checkbox"
          id="mailing-list-yes"
          name="mailing-list"
          onChange={(e) => setMailingListYes(e.target.checked)}
          value={mailingListYes}
          className="mr-5"
        />

        <div className="mt-5 bg-white w-1/4 h-10 flex border-r-2 justify-center">
          <button type="submit" className="text-black font-semibold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
