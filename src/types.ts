export type Wso2ApimConfig = {
  /**
   * WSO2 API base Url. E.g.: https://mywso2.com
   */
  baseUrl: string;
  /**
   * WSO2 API username
   */
  username: string;
  /**
   * WSO2 API password
   */
  password: string;
  /**
   * WSO2 client name registered before API calls
   * @default 'wso2apim-sdk-client'
   */
  clientName?: string;
  /**
   * WSO2 owner identification
   * @default username
   */
  owner?: string;
  /**
   * Rejects unverified hosts during TLS handshake (self signed certificates etc)
   * @default true
   */
  tlsRejectUnauthorized?: boolean;
};

export type ClientCredentials = {
  clientId: string;
  clientSecret: string;
};
