const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ru",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/ru/services",
        permanent: true,
      },
      {
        source: "/ru/services/website-development",
        destination: "/ru/sozdanie-saitov-tashkent",
        permanent: true,
      },
      {
        source: "/ru/services/landing-page",
        destination: "/ru/lending-pod-klyuch-tashkent",
        permanent: true,
      },
      {
        source: "/ru/services/corporate-website",
        destination: "/ru/korporativny-sait-uzbekistan",
        permanent: true,
      },
      {
        source: "/ru/services/ecommerce",
        destination: "/ru/sait-dlya-ecommerce",
        permanent: true,
      },
      {
        source: "/ru/services/seo",
        destination: "/ru/seo-prodvizhenie-tashkent",
        permanent: true,
      },
      {
        source: "/uz/services/website-development",
        destination: "/uz/sozdanie-saitov-tashkent",
        permanent: true,
      },
      {
        source: "/uz/services/landing-page",
        destination: "/uz/lending-pod-klyuch-tashkent",
        permanent: true,
      },
      {
        source: "/uz/services/corporate-website",
        destination: "/uz/korporativny-sait-uzbekistan",
        permanent: true,
      },
      {
        source: "/uz/services/ecommerce",
        destination: "/uz/sait-dlya-ecommerce",
        permanent: true,
      },
      {
        source: "/uz/services/seo",
        destination: "/uz/seo-prodvizhenie-tashkent",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
