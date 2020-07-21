/*export interface Contato {
  _id: string;
  name: string;
  email: string;
  phone: string;
  }
*/

export class Contato{
  public _id: string

  constructor(
    public name: string,
    public email: string,
    public phone: string
  ){}

}
