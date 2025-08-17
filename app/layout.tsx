import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: "MYNZTRIP API Documentation",
  description: "MYNZTRIP API documentation for developers.",
  authors: [{ name: "NZITECH TEAM" }],
  themeColor: "#0011ff",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MYNZTRIP API DOCS",
    description: "Explore and integrate with the mynztrip API efficiently.",
    url: "https://documentation.mynztrip.com",
    type: "website",
    images: [
      {
        url: "https://documentation.mynztrip.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "mynztrip api image",
      },
    ],
  },
};

const banner = (
  <Banner storageKey="2.0-release">🎉 mynztrip 2.0 API is released.</Banner>
);
const navbar = (
  <Navbar
    logo={
      <span style={{ color: "blue", fontSize: "35px", fontWeight: "bold" }}>
        mynztrip
      </span>
    }
    logoLink="/"
    projectLink="https://github.com/nz-world-travels/nz-world-travels"
    chatLink="https://wa.me/+60184009990?text=Hello%20I%20need%20help%20with%20the%20API"
    chatIcon={
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ height: "30px", width: "30px" }}
      />
    }
  ></Navbar>
);

const footer = (
  <Footer>© {new Date().getFullYear()} ❤️ Built by NZiTech</Footer>
);

const search = <Search placeholder="Search docs.."></Search>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/nz-world-travels/nz-world-travels"
          footer={footer}
          search={search}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
