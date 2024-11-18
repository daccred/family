import localFont from 'next/font/local'
// Local font files
export const sfPro = localFont({
  src: [
    {
      path: '../public/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    }
  ],
  variable: '--font-sf',
  display: 'swap',
}) 