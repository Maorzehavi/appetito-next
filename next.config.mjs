/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'osfkggnpteviwbvdosyh.supabase.co'
            }
        ]
    }
};

export default nextConfig;
