export class Tag {
    static readonly Angular = new Tag('Angular', 'red');
    static readonly Python = new Tag('Python', 'LimeGreen');
    static readonly Java = new Tag('Java', 'blue');
    static readonly Typescript = new Tag('TypeScript', 'purple');
    static readonly Javascript = new Tag('Javascript', 'darkblue');
    static readonly C = new Tag('C', 'brown');
    static readonly CSS = new Tag('CSS', 'orange');
    static readonly HTML = new Tag('HTML', 'pink');
    static readonly MYSQL = new Tag('MYSQL', 'Magenta');
    static readonly Cplusplus = new Tag('C++', 'brown');
    static readonly REACT = new Tag('React', 'Asparagus');
    static readonly NODEJS = new Tag('NodeJs', 'violet');
  
    constructor(private readonly key: string, public readonly color: string) {}
  
    toString() {
      return this.key;
    }
}