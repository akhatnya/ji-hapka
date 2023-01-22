import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Layout = ({ children, title = "Jihaz AR", description, keywords, image = "https://storage.googleapis.com/viled-cdn/img-jihazlogo.png" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      <meta property="og:site_name" content="Jihaz AR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:keywords" content={keywords} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="http://jihazapp.kz/" />
    </Head>
    {children}
  </>
);

export default Layout;
