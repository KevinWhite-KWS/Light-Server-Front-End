import { LdlServer } from "./ldl-server";

export class ConnectionSettings {
  username: string;
  password: string;
  server: string;
  servers: LdlServer[];
}
