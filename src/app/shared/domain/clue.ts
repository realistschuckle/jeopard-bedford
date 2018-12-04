export class Category {
  public id: number;
  public title: string;
}

export class Clue {
  constructor(
    public id: number,
    public answer: string,
    public question: string,
    public value: number,
    public category: Category,
    public invalid_count?: number
  ) {}

  public behavior(): number {
    return this.id * 100;
  }
}
