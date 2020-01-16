export class Endpoints {
  serviceEndpoint: string;

  base: string;

  constructor(base: string) {
    this.serviceEndpoint = `http://${base}/serviceendpoints`;
    this.base = `http://${base}`;
  }

  getVersionUrl(id: string): string {
    return `${this.serviceEndpoint}/${id}/version`;
  }
}

export function errorMessage(status: number): string {
  let message;

  switch (status) {
    case 400:
      message =
        "'name or url is missing or has a wrong format, please try again'";
      break;
    case 401:
      message = 'Unauthorized, please login to continue';
      break;
    case 409:
      message = 'Endpoint already exist';
      break;
    case 500:
      message = 'A server error occured. Please try again later';
      break;
    default:
      message = 'An unknown error occured. Please try again';
  }

  return message;
}
