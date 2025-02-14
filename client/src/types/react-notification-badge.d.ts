declare module "react-notification-badge" {
  import { ComponentType } from "react";

  export interface NotificationBadgeProps {
    count: number;
    effect?: any;
  }

  const NotificationBadge: ComponentType<NotificationBadgeProps>;
  export default NotificationBadge;

  export const Effect: {
    SCALE: any;
    ROTATE_X: any;
    ROTATE_Y: any;
    SCALE_ROTATE: any;
    SCALE_INCREASE: any;
  };
}
