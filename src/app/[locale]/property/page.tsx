"use client";

import React from "react";
import BuyCards from "@/components/buy-components/BuyCards";

import { useTranslations } from "next-intl";
import { row1, row2, row3, row4, row5 } from "@/data/properties";

import PropertyHero from "@/components/mapsold/maphead";

export default function Page() {
  const t = useTranslations("buyPage");

  return (
    <>
      <PropertyHero />
      <div className="pt-20 pb-20 space-y-8">
        <BuyCards
          title={t("row1.title")}
          linkText={t("row1.link")}
          linkHref="#"
          properties={row1}
        />
        <BuyCards
          title={t("row2.title")}
          linkText={t("row2.link")}
          linkHref="#"
          properties={row2}
        />
        <BuyCards
          title={t("row3.title")}
          linkText={t("row3.link")}
          linkHref="#"
          properties={row3}
        />
        <BuyCards
          title={t("row4.title")}
          linkText={t("row4.link")}
          linkHref="#"
          properties={row4}
        />
        <BuyCards
          title={t("row5.title")}
          linkText={t("row5.link")}
          linkHref="#"
          properties={row5}
        />
      </div>
    </>
  );
}
