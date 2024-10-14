import { MDXProvider } from '@mdx-js/react';
import { MdxEmbedProvider } from '@pauliescanlon/gatsby-mdx-embed';
import { Link } from 'gatsby';
import React from 'react';
import ExternalLink from '../components/externalLink';
import Footer from './footer';
import Header from './header';
import Image from './image';
import './styles/main.css';
import Table from './table';
import Chatbot from '../components/chatbot';

// components that are exposed to MDX files
const mdxComponents = { Image, Link, ExternalLink, Table };

export default function Layout({ children, withContainer = true }) {
  return (
    <MdxEmbedProvider>
      <MDXProvider components={mdxComponents}>
        <Header />
        {withContainer ? (
          <section className="section">
            <div className="container">{children}</div>
          </section>
        ) : (
          <>{children}</>
        )}
        <Chatbot />
        <Footer />
      </MDXProvider>
    </MdxEmbedProvider>
  );
}
