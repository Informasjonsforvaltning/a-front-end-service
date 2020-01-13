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
