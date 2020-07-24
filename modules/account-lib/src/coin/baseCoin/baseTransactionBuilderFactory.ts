import { BaseCoin as CoinConfig } from '@bitgo/statics';

/**
 * Generic transaction builder factory to be extended with coin specific logic.
 * Provide a set of transaction builders to create each transaction type.
 */
export abstract class BaseTransactionBuilderFactory {
  protected _coinConfig: Readonly<CoinConfig>;
  /**
   * Base constructor.
   *
   * @param {CoinConfig} _coinConfig BaseCoin from statics library
   */
  protected constructor(_coinConfig: Readonly<CoinConfig>) {
    this._coinConfig = _coinConfig;
  }

  /**
   * Returns an specific builder to create a wallet initialization transaction
   */
  public abstract getWalletInitializationBuilder();

  /**
   * Returns a specific builder to create a funds transfer transaction
   */
  public abstract getTransferBuilder();
}
