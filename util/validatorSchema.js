import { Validator } from "jsonschema";

/**
 * @param {Validator} v
 */
const v = new Validator();

/**
 * @param {object} instance
 * @param {object} schema
 */
const validate = (instance, schema) => {
  let response = v.validate(instance, schema, {
    allowUnknownAttributes: false,
  });
  if (!response.valid) return [400, response.errors];
  return [200, false];
};

export default validate;
