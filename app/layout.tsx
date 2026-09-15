import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { GA4Tracking } from "@/components/ui/GA4Tracking";
import { TRACKING_PANEL_ORIGIN } from "@/lib/tracking";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guia Visual Aprenda Sem Estudar",
  description:
    "Estude Análises Clínicas de uma forma muito mais visual com mais de 80 mapas organizados.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const tiktokPixelCode = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_CODE;

  return (
    <html lang="pt-BR" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {(metaPixelId || tiktokPixelCode) && (
          <Script id="pageview-dispatch" strategy="afterInteractive">
            {`window.__pageViewEventId = crypto.randomUUID();
              fetch('${TRACKING_PANEL_ORIGIN}/api/event', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  trck_user_id: window.trckUserId,
                  event_name: "PageView",
                  event_id: window.__pageViewEventId,
                  event_source_url: window.location.href,
                  skip_ga4: true,
                }),
              }).catch(() => {});`}
          </Script>
        )}

        {metaPixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView', {}, { eventID: window.__pageViewEventId });`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                alt=""
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}

        {tiktokPixelCode && (
          <Script id="tiktok-pixel" strategy="afterInteractive">
            {`!function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

              ttq.load('${tiktokPixelCode}');
              ttq.page();
            }(window, document, 'ttq');`}
          </Script>
        )}

        <GA4Tracking />

        <Script
          src={`${TRACKING_PANEL_ORIGIN}/tracker.js`}
          strategy="beforeInteractive"
        />

        {children}
      </body>
    </html>
  );
}
