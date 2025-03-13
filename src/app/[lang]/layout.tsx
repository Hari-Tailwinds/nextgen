
import "@assets/fonts/noir-pro/styles.css";

import "./globals.css";

export async function generateStaticParams() {
  return [{ lang: "en-US" }];
}
type Params = { lang: string };

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Params;
  }>
) {


  const { children } = props;

  return (
    <html >
      <body>
   {children}
      </body>
    </html>
  );
}
