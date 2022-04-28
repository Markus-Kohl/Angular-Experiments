export const VALIDATION_MESSAGES: { [key: string]: string } = {
  required: '{{fieldName}} is required',
  emailFormat: '{{fieldName}} is in an invalid format',
  emailAddressTaken: '{{fieldName}} {{emailAddress.value}} is already used.',
  min: '{{fieldName}} is less than minimum value of {{min}}.',
};
