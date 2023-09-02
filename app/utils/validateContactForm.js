const validateContactForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  } else if (values.name.length < 2) {
    errors.name = "Name must be more than 2 characters";
  } else if (values.name.length > 30) {
    errors.name = "Name must be less than 30 characters";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!values.email.includes("@")) {
    errors.email = "Email should include @";
  }

  return errors;
};

export default validateContactForm;
