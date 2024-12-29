import { Client } from "@nosana/sdk";
import { PublicKey } from "@solana/web3.js";

const nosana = new Client("mainnet");

export default async function Home() {
  const markets = await nosana.jobs.allMarkets();

  return (
    <div>
      <h1>Nosana Markets</h1>
      {markets.map(({ address }) => (
        <li key={address}>{new PublicKey(address).toString()}</li>
      ))}
    </div>
  );
}
