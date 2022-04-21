interface Error {
  message: string;
}

const isError = (error: unknown): error is Error =>
  typeof error === "object" && error !== null && "message" in error;

export default isError;
