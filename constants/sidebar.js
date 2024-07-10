import {
  ConfigurationsIcon,
  DashboardIcon,
  DocumentsIcon,
  CorrespondentsIcon,
  TagsIcon,
  CustomFieldIcon,
  DocumentsTypeIcon,
  StoragePathIcon,
  workflowIcon,
  MailIcon,
  usersAndGroupsIcon,
  fileTasksIcon,
  SettingsIcon,
} from "../constants/svgs";

export const pagesNavbar = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    link: "/dashboard",
  },
  {
    label: "Documents",
    icon: DocumentsIcon,
    link: "/dashboard/documents",
  },
];
export const analyticsNavbar = [
  {
    label: "Correspondents",
    icon: CorrespondentsIcon,
    link: "/dashboard/correspondents",
  },
  {
    label: "Tags",
    icon: TagsIcon,
    link: "/dashboard/tags",
  },
  {
    label: "Documents Type",
    icon: DocumentsTypeIcon,
    link: "/dashboard/documents-type",
  },
  {
    label: "Storage Paths",
    icon: StoragePathIcon,
    link: "/dashboard/storage-paths",
  },
  {
    label: "Custom Fields",
    icon: CustomFieldIcon,
    link: "/dashboard/custom-fields",
  },
  {
    label: "Workflows",
    icon:workflowIcon,
    link: "/dashboard/workflows",
  },
  {
    label: "Mail",
    icon:MailIcon,
    link: "/dashboard/mail",
  },
 
];
export const userNavbar = [
  {
    label: "Settings",
    icon:SettingsIcon,
    link: "/dashboard/settings",
  },
  {
    label: "Configurations",
    icon: ConfigurationsIcon,
    link: "/dashboard/configurations",
  },
  {
    label: "Users And Groups",
    icon:usersAndGroupsIcon,
    link: "/dashboard/users-and-groups",
  },
  {
    label: "File Tasks",
    icon:fileTasksIcon,
    link: "/dashboard/file-tasks",
  },
];
