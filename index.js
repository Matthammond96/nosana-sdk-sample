import { Client } from "@nosana/sdk";

const private_key = process.env.SOLANA_KEY;

const nosana = new Client("mainnet", private_key);

console.log(`
  Connected with wallet: ${nosana.solana.wallet.publicKey.toString()}
  Solana balance: ${await nosana.solana.getSolBalance()} SOL
  Nosana balance: ${(
    await nosana.solana.getNosBalance()
  )?.amount.toString()} NOS
  `);
