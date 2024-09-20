/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add a rule to handle the canvas.node binary module
        config.module.rules.push({test: /\.node$/,use: 'raw-loader'})

        // Exclude canvas from beign processed by next.js in the browser
        if( !isServer) config.externals.push('canvas');
        return config;
    }
};

export default nextConfig;

