import { UserRole } from './roles-response-codes';

interface Credentials {
  role: UserRole;
  username: string;
  password: string;
}

type RolesCredentials = Credentials[];

export const USERS_CREDENTIALS: RolesCredentials = [
  { role: 'ORGANIZATION_ADMIN', username: 'org.admin@codibly.com', password: 'Test123#' },
  { role: 'SITE_OWNER', username: 'site.owner@codibly.com', password: 'Test123#' },
];
