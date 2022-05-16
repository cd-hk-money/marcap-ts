import colorLib, { Color } from '@kurkle/color';
import { ISimpleChartData } from '@/models/stock';

// 가격을 정규화 합니다.
export function priceNormalization(price: number | string): string {
  return typeof price === 'number' ? 
    price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") :
    price.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
}

// 모바일 여부를 판별합니다.
export function isMobile(): boolean | any {    
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); 
}

// 색상의 투명도를 조절합니다.
export function transparentize(value: string | number[] | Color, opacity?: number) {
  const alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

export function convertChartData(keys: string[], value: string[], label: string[]): ISimpleChartData {
  return keys.reduce((acc: any, cur: string, index: number) => {        
    acc[keys[index]] = {
      date: label,
      value: value.map((s) => s[0][cur])
    }
    return acc
  },{})
}

export function mobileHeight(type: string): number {
  switch (type) {
    case 'xs': return 220
    case 'sm': return 400
    case 'md': return 500
    case 'lg': return 600
    case 'xl': return 800    
  }
  return 800  
}

export function division(arr: any[], n: number): any[any] {
  const length = arr.length
  const divide = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0)
  const newArray = []

  for (let i = 0; i < divide; i++) {
    newArray.push(arr.splice(0, n))
  }

  return newArray
}

export function belowGradient (ctx, chartArea, data, scales, width, height) {
  const {left, right, top, bottom} = chartArea
  const x = scales['x-axis-0']
  const y = scales['y-axis-0']
  const gradientBackground = ctx.createLinearGradient(
    0, y.getPixelForValue(data.datasets[0].data[0]), 0, bottom) 

  gradientBackground.addColorStop(0, 'rgba(255, 26, 104, 0)')
  gradientBackground.addColorStop(0, 'rgba(255, 26, 104, 0.4)')
  console.log('fucl')
  return gradientBackground
}

export function getGradient (ctx, chartArea, data, scales, width, height) {
  const {left, right, top, bottom} = chartArea
  const x = scales['x-axis-0']
  const y = scales['y-axis-0']
  const gradientBorder = ctx.createLinearGradient(0, 0, 0, bottom)   
  const shift = y.getPixelForValue(data.datasets[0].data[0]) / bottom

  gradientBorder.addColorStop(0, 'rgba(28, 24, 222, 1)')
  gradientBorder.addColorStop(shift, 'rgba(75, 192, 192, 1)')
  gradientBorder.addColorStop(shift, 'rgba(255, 26, 104, 1)')
  gradientBorder.addColorStop(1, 'rgba(255, 26, 104, 1)')

  return gradientBorder
}
