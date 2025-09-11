// Configuration for different environments
export const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? window.location.origin 
    : 'http://localhost:5000',
    
  assets: {
    basePath: '/assets'
  }
};

export const getAssetUrl = (path: string) => {
  // For Vercel deployment, assets are served from /assets/
  return `/assets/${path}`;
};