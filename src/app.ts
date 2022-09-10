let userInput: unknown;

const generateError = (message: string, code: number) => {
  throw { message: message, errorCode: code };
};

generateError('an error occured', 484);
