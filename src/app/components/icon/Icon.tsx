import clsx from "clsx";

const Icons = {
  accountCircle: "/assets/icons/account-circle.svg",
  arrowDownRight: "/assets/icons/arrow-down-right.svg",
  arrowUpRight: "/assets/icons/arrow-up-right.svg",
  arrowRight: "assets/icons/arrow-right.svg",
  barChart: "assets/icons/bar-chart.svg",
  calendar: "assets/icons/calendar.svg",
  chevronDown: "assets/icons/chevron-down.svg",
  clock: "assets/icons/clock.svg",
  close: "assets/icons/close.svg",
  edit: "assets/icons/edit.svg",
  facebook: "assets/icons/facebook.svg",
  filmActive: "assets/icons/film-active.svg",
  film: "assets/icons/film.svg",
  google: "assets/icons/google.svg",
  instagram: "assets/icons/instagram.svg",
  menuBar: "assets/icons/menu-bar.svg",
  more: "assets/icons/more.svg",
  search: "assets/icons/search.svg",
  smile: "assets/icons/smile.svg",
  star: "assets/icons/star.svg",
  trash: "assets/icons/trash.svg",
  twitter: "assets/icons/twitter.svg",
  usersActive: "assets/icons/users-active.svg",
  users: "assets/icons/users.svg",
  video: "assets/icons/video.svg",
  view: "assets/icons/view.svg",
};

export type IconType =
  | "accountCircle"
  | "arrowDownRight"
  | "arrowUpRight"
  | "arrowRight"
  | "barChart"
  | "calendar"
  | "chevronDown"
  | "clock"
  | "close"
  | "edit"
  | "facebook"
  | "filmActive"
  | "film"
  | "google"
  | "instagram"
  | "menuBar"
  | "more"
  | "search"
  | "smile"
  | "star"
  | "trash"
  | "twitter"
  | "usersActive"
  | "users"
  | "video"
  | "view";

interface IconProps {
  icon: IconType;
  width?: number;
  height?: number;
  className?: string;
}
function Icon({ icon, width, height, className }: IconProps) {
  return (
    <img
      src={Icons[icon]}
      alt=""
      className={clsx(
        `drop-shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.50)]`,
        `${className || ""}`
      )}
      style={{ width: width, height: height }}
    />
  );
}

export default Icon;
