'use client';

import React, { useEffect, useRef, useState } from 'react';
import Slide from '@/components/Slide';

export default function DataMethodologySlide() {
  const mermaidRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Mermaid script dynamically
    const loadMermaid = async () => {
      if (!(window as any).mermaid) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
        script.async = true;
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const mermaid = (window as any).mermaid;
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#1e3a8a',
          primaryTextColor: '#ffffff',
          secondaryColor: '#059669',
          tertiaryColor: '#7c3aed',
          fontSize: '16px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        },
        flowchart: {
          nodeSpacing: 50,
          rankSpacing: 50,
          curve: 'linear',
          padding: 20,
          useMaxWidth: true,
        }
      });

      setIsLoaded(true);
    };

    loadMermaid();
  }, []);

  useEffect(() => {
    if (isLoaded && mermaidRef.current) {
      const renderDiagram = async () => {
        const mermaid = (window as any).mermaid;
        const diagramDefinition = `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#1e3a8a','primaryTextColor':'#fff','primaryBorderColor':'#1e40af','lineColor':'#374151','secondaryColor':'#059669','tertiaryColor':'#7c3aed','fontSize':'16px'}}}%%
graph TD
    subgraph src["SOURCE DATASETS"]
        FRS["Family Resources Survey 2023-24"]:::data
        SPI["Survey of Personal Incomes 2020-21"]:::data
        WAS["Wealth and Assets Survey 2006-20"]:::data
        LCFS["Living Costs and Food Survey 2021-22"]:::data
        ETB["Effects of Taxes and Benefits 1977-2021"]:::data
        UC["Administrative Targets"]:::data
    end

    FRSCopy1["FRS Copy 1: with Impute High Income"]:::data
    FRSCopy2["FRS Copy 2: without Impute High Income"]:::data
    MergePoint["Stacking"]:::merge

    subgraph imp["IMPUTATIONS"]
        ImpConsumption("Impute Consumption"):::process
        ImpWealth("Impute Wealth"):::process
        ImpVAT("Impute VAT"):::process
        ImpServices("Impute Public Services"):::process
    end

    ImputedFRS["FRS with Imputed Variables"]:::data
    Uprate("Uprate to 2025"):::process
    Calibrate("Calibration & Reweighting (PyTorch)"):::process
    CalibratedFRS["Calibrated FRS 2025"]:::data

    FRS --> FRSCopy1
    FRS --> FRSCopy2
    SPI -.-> FRSCopy1
    FRSCopy1 --> MergePoint
    FRSCopy2 --> MergePoint
    MergePoint --> imp
    LCFS -.-> imp
    WAS -.-> imp
    ETB -.-> imp
    imp --> ImputedFRS
    ImputedFRS --> Uprate
    Uprate --> Calibrate
    UC --> Calibrate
    Calibrate --> CalibratedFRS

    classDef data fill:#1e3a8a,stroke:#1e40af,stroke-width:3px,color:#ffffff
    classDef process fill:#059669,stroke:#047857,stroke-width:3px,color:#ffffff
    classDef merge fill:#f8fafc,stroke:#94a3b8,stroke-width:1px,color:#000000`;

        try {
          const { svg } = await mermaid.render('mermaid-diagram', diagramDefinition);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error);
        }
      };

      renderDiagram();
    }
  }, [isLoaded]);

  return (
    <Slide>
      <div className="w-full h-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, #f8fafc 0%, #f1f5f9 100%)' }}>
        <div ref={mermaidRef} className="mermaid" style={{ width: '95%', height: '95%' }} />
      </div>
    </Slide>
  );
}
