import Header from "./Header";
import Footer from "./Footer";

interface SimplePageLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

export function SimplePageLayout({ children, title, lastUpdated }: SimplePageLayoutProps) {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white">
        <section className="bg-white pt-20 pb-10 lg:pt-28 border-b border-border">
          <div className="container-narrow">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">Legal</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-xs text-muted-foreground mt-3">
                Terakhir diperbarui: {lastUpdated}
              </p>
            )}
          </div>
        </section>
        <section className="py-12 lg:py-16">
          <div className="container-narrow">
            <div className="article-content">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
