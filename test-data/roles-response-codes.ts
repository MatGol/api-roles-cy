export type UserRole =
  | 'SUPER_ADMIN'
  | 'ORGANIZATION_ADMIN'
  | 'UTILITY_OPERATOR'
  | 'EFLEET_PROGRAM_MANAGER'
  | 'SUPPORT_ENGINEER'
  | 'SITE_OWNER'
  | 'GUEST';

interface ResponseData {
  code: number;
  data?: object;
}

interface RolesPermissions {
  [key: UserRole]: ResponseData;
}

export const userCreation: RolesPermissions = {
  SUPER_ADMIN: { code: 200 },
  ORGANIZATION_ADMIN: { code: 200 },
  UTILITY_OPERATOR: { code: 200 },
  EFLEET_PROGRAM_MANAGER: { code: 200 },
  SUPPORT_ENGINEER: { code: 200 },
  SITE_OWNER: { code: 200 },
  GUEST: { code: 200 },
};
