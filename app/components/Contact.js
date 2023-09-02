import React from "react";

const Contact = () => {
  return (
    <div className="pt-5 max-w-[1240px] text-white">
      <form className="max-w-[600px] m-auto">
        <div className="grid sm:grid-cols-2 gap-3">
          <input type="text" className="p-3" placeholder="Name" />
          <input type="text" className=" p-3" placeholder="Email" />
        </div>
        <div>
          <textarea
            className="w-full my-4"
            cols="30"
            rows="10"
            placeholder="Enter Comments Here"
          ></textarea>
        </div>
        <p className="mb-2">Would you like to be added to our mailing list?</p>
        <label for="mailing-list-yes" className="mr-2">
          Yes
        </label>
        <input
          type="checkbox"
          id="mailing-list-yes"
          name="mailing-list"
          value="yes"
          className="mr-5"
        />
        <label for="mailing-list-yes" className="mr-2">
          No
        </label>
        <input
          type="checkbox"
          id="mailing-list-no"
          name="mailing-list"
          value="no"
        />
      </form>
    </div>
  );
};

export default Contact;
