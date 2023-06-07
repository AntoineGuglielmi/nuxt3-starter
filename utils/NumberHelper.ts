export interface INumberHelper {
  toPrice: (_number: number, options?: Record<string, any>) => string;
  toPercent: (_number: number, options?: Record<string, any>) => string;
}

export const NumberHelper = (locale = 'fr-FR'): INumberHelper => {

  const format = (_number: number, options: Record<string, any>): string => {
    return new Intl.NumberFormat(locale, options).format(_number);
  }

  const toPrice = (_number: number, options?: Record<string, any>): string => {
    return format(_number, {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      ...options
    });
  }

  const toPercent = (_number: number, options?: Record<string, any>): string => {
    return format(_number, {
      style: 'percent',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
      ...options
    });
  }

  return {
    toPrice,
    toPercent
  }

}
