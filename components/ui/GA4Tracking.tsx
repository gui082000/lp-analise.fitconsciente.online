"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { TRACKING_PANEL_ORIGIN } from "@/lib/tracking";

type Ga4ConfigResponse = {
  measurement_ids?: string[];
};

/**
 * Busca os measurement_id do GA4 cadastrados no painel de tracking e injeta
 * o gtag.js dinamicamente. Assim, trocar de propriedade GA4 no painel não
 * exige mexer nesta landing page.
 */
export function GA4Tracking() {
  const [measurementIds, setMeasurementIds] = useState<string[]>([]);

  useEffect(() => {
    fetch(`${TRACKING_PANEL_ORIGIN}/api/ga4-config`)
      .then((res) => res.json())
      .then((data: Ga4ConfigResponse) => {
        if (Array.isArray(data.measurement_ids) && data.measurement_ids.length > 0) {
          setMeasurementIds(data.measurement_ids);
        }
      })
      .catch(() => {
        // Painel de tracking fora do ar não deve quebrar a landing page.
      });
  }, []);

  if (measurementIds.length === 0) return null;

  const primaryMeasurementId = measurementIds[0];
  const configCalls = measurementIds.map((id) => `gtag('config', '${id}');`).join("\n              ");

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryMeasurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
              function gtag(){ window.dataLayer.push(arguments); }
              gtag('js', new Date());
              ${configCalls}
              gtag('get', '${primaryMeasurementId}', 'client_id', function(clientId) {
                if (!clientId || !window.trckUserId) return;
                fetch('${TRACKING_PANEL_ORIGIN}/api/identify', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ trck_user_id: window.trckUserId, ga_client_id: clientId }),
                }).catch(function () {});
              });
              gtag('get', '${primaryMeasurementId}', 'session_id', function(sessionId) {
                if (!sessionId || !window.trckUserId) return;
                fetch('${TRACKING_PANEL_ORIGIN}/api/identify', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ trck_user_id: window.trckUserId, ga_session_id: sessionId }),
                }).catch(function () {});
              });`}
      </Script>
    </>
  );
}
