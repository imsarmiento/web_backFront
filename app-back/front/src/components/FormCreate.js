import React from "react";
import useForm from "../hooks/formHook";

import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  company: Joi.string().required(),
  salary: Joi.number().required(),
  city: Joi.string().required(),
});

function FormCreate(props) {
  const { handleSubmit, handleInputChange } = useForm(schema);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="company"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            autoComplete="salary"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="city"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default FormCreate;
