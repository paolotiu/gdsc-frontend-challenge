import { ValidationError } from 'yup';

/**
 * @desc Makes all fields in an object a blank string
 * @example
 * // returns {name: '', email: ''};
 * getBlankObject({name: 'Bob', email: 'bob@bob.com'})
 */
export const getBlankObject = <Obj extends Record<string, unknown>>(
  obj: Obj
): { [k in keyof Obj]: '' } => {
  return Object.keys(obj).reduce((prev, key) => ({ ...prev, [key]: '' }), {}) as {
    [k in keyof Obj]: '';
  };
};

/**
 * @desc Transforms a yup error into an object
 */
export const transformErrorMessages = (e: ValidationError) => {
  return e.inner.reduce((prev, { message, path }) => {
    if (!path) return prev;
    return {
      ...prev,
      [path]: message,
    };
  }, {});
};
