import React from "react";
import { t } from "../lib/theme.js";

export function Footer() {
  return (
    <footer style={{ padding: "30px 0", borderTop: "1px solid var(--line)" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
        <div className="font-mono" style={{ fontSize: 11.5, color: t.inkDim }}>© 2026 Parthibakannan S </div>
        <div className="font-mono" style={{ fontSize: 11.5, color: t.inkDim }}>Gen AI Engineer</div>
      </div>
    </footer>
  );
}
