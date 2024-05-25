import dotenv from "dotenv";
dotenv.config();

export default {
  type: "service_account",
  project_id: `${process.env.FBprojectId}`,
  private_key_id: `${process.env.FBprivate_key_id}`,
  private_key: `-----BEGIN PRIVATE KEY-----\n${process.env.FBprivate_key}==\n-----END PRIVATE KEY-----\n`,
  client_email: `${process.env.FBclient_email}`,
  client_id: `${process.env.FBclient_id}`,
  auth_uri: `${process.env.FBauth_uri}`,
  token_uri: `${process.env.FBtoken_uri}`,
  auth_provider_x509_cert_url: `${process.env.FBauth_provider_x509_cert_url}`,
  client_x509_cert_url: `${process.env.FBclient_x509_cert_url}`,
  universe_domain: `${process.env.FBuniverse_domain}`,
};
