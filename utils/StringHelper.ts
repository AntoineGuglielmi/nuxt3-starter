export interface IStringHelper {
  ucFirst: (_string: string) => string;
}

export const StringHelper = (): IStringHelper => {

  const ucFirst = (_string: string): string => {
    return _string.slice(0,1).toUpperCase() + _string.slice(1);
  }

  return {
    ucFirst
  }

}
