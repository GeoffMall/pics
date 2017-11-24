export interface CoinMarketCapResponse {
  id: string;
  name: string;
  symbol: string;
  rank: any;
  price_usd: any;
  price_btc: string;
  // 24h_volume_usd: string,
  market_cap_usd: any;
  available_supply?: string;
  total_supply?: string;
  percent_change_1h?: string;
  percent_change_24h?: string;
  percent_change_7d?: string;
  last_updated?: string;
}
