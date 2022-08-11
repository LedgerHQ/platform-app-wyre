:warning: This repo is deprecated now that Wyre have updated theit dapp to their V2 and managing it themselves

cf. https://ledger-wyre.vercel.app

----

# Platform app Wyre

This is a Live App integrating the Wyre widget used to buy crypto in the Ledger Live context. As of today it is not yet integrated in the Ledger Live platform.

It has been extracted from the soon to be deprecated [ledger-live-platform-apps](https://github.com/LedgerHQ/ledger-live-platform-apps) repo.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Todo

- Make sure all expected crypto and tokens are properly handled by the "Select Account" widget (cf. [live-app-sdk](https://github.com/LedgerHQ/live-app-sdk))
- Configure linter and prettier: for now it is the bare minimum
- Deploy to Vercel (if relevant)
- Integrate in LL (if relevant)
