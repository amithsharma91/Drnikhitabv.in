interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
}

const BASE_URL = 'https://drnikhitabv.in';

export default function PageSEO({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogType = 'website',
  schema,
}: PageSEOProps) {
  const fullTitle = title.includes('Dr. Nikhita')
    ? title
    : `${title} | Dr. Nikhita B Vadvadgi — Best Gynecologist in Bangalore`;
  const canonical = canonicalPath === '/' ? BASE_URL : `${BASE_URL}${canonicalPath}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
