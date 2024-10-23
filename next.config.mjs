// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['greenline.yerevan-city.am','erp-media.innodream.com'],
      },
};
 
export default withNextIntl(nextConfig);