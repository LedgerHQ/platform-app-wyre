/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import Head from "next/head";

import { useRouter } from "next/router";
import { WyreApp } from "../src/WyreApp";

type QueryParams = {
  accountId?: string;
  accountAddress?: string;
  language?: string;
  fiatCurrencyId?: string;
  cryptoCurrencyId?: string;
  primaryColor?: string;
  mode?: "onRamp" | "offRamp";
  fiatAmount?: string;
  cryptoAmount?: string;
};

const Wyre = () => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  const {
    accountAddress,
    language,
    fiatCurrencyId,
    cryptoCurrencyId,
    primaryColor,
    fiatAmount,
    cryptoAmount,
  } = router.query as QueryParams;



  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      <Head>
        <script src="https://verify.sendwyre.com/js/verify-module-init-beta.js"></script>
      </Head>
      {mounted && (
        <WyreApp
          accountAddress={accountAddress}
          language={language}
          fiatCurrencyId={fiatCurrencyId}
          cryptoCurrencyId={cryptoCurrencyId}
          primaryColor={primaryColor}
          fiatAmount={fiatAmount}
          cryptoAmount={cryptoAmount}
        />
      )}
    </>
  );
};

export default Wyre;
