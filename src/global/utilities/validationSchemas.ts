import * as Yup from 'yup';
import { PHONE_REGEXP, SPECIAL_CHARS_REGEXP } from '../regexp.ts';
import { MAXLENGTH_NAME } from '../сonstants.ts';

const formValidationSchemaStep1 = Yup.object({
  name: Yup.string()
    .matches(SPECIAL_CHARS_REGEXP, 'Name cannot contain special characters')
    .max(MAXLENGTH_NAME, `Must be ${MAXLENGTH_NAME} characters or less`)
    .required('This field is required'),
  email: Yup.string().email().required('This field is required'),
  phone: Yup.string()
    .matches(PHONE_REGEXP, 'Incorrect phone number, example: +1 234 567 890')
    .required('Required'),
});

const formValidationSchemaStep2 = Yup.object({
  selectedPlan: Yup.string().required('Please select a plan'),
});

const formValidationSchemaStep3 = Yup.object({
  pickedAddons: Yup.array(),
});

const formValidationSchemaStep4 = null;

export const multiStepFormValidationSchemas = [
  formValidationSchemaStep1,
  formValidationSchemaStep2,
  formValidationSchemaStep3,
  formValidationSchemaStep4,
];
