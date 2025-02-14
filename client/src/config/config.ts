const config = {
  backendUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost:3001/api",
  backendBaseUrl: process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost:3001",
  googleAuthCallback: process.env.REACT_APP_GOOGLE_AUTH_CALLBACK || "http://localhost:3001/api/auth/google/callback",
  googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  frontendUrl: process.env.REACT_APP_FRONTEND_URL,

  stripePublishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '',
  stripeSecretKey: process.env.REACT_APP_STRIPE_SECRET_KEY || '',

  zegeCloudAppId: process.env.REACT_APP_ZEGOCLOUD_APP_ID || 171402487,
  zegeCloudServerSecret: process.env.REACT_APP_ZEGOCLOUD_SERVER_SECRET || '6a0b355926dcad0897c269e5c85f85d7',

  clerkPublishableKey: process.env.REACT_APP_CLERK_PUBLISHABLE_KEY,

  imageKitEndpoint: process.env.REACT_APP_IMAGE_KIT_ENDPOINT || "https://ik.imagekit.io/cfss1m3oa",
  imageKitPublicKey: process.env.REACT_APP_IMAGE_KIT_PUBLIC_KEY || "public_NvDPM5qzgLlf3vqbXy8SCUbNPFc=",

  geminiPublicKey: process.env.REACT_APP_GEMINI_PUBLIC_KEY || "AIzaSyBvNU6CwcXAjG1-sjqRoF16Ml9flTSb2pw",
};

export default config;


