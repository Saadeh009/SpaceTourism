/** @type {import('next').NextConfig} */
//const nextConfig = {
//  reactStrictMode: true,
//}

module.exports = {

  webpackDevMiddleware: config => {
     config.watchOptions = {
       poll: 1000,
       aggregateTimeout: 300,
     },
    {reactStrictMode:true}

 
     return config
 
   }
}
  
