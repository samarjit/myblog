/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer2';

const nextConfig = {
    output: 'export',
};

export default  withContentlayer(nextConfig);
