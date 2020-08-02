export interface Encryptor {
  encrypt: (password: string) => Promise<string>;
}
