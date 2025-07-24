import { tv } from "tailwind-variants";

const button = tv({
  base: "cursor-pointer flex items-center justify-center gap-1.5 rounded-md transition-all duration-300 font-semibold",
  variants: {
    color: {
      Primary:
        "border border-border bg-foreground hover:bg-hover text-background",
      SecondaryGray:
        "border border-border bg-button hover:bg-hover-1 text-foreground",
      Transparent: "hover:bg-hover-1 text-foreground",
      PrimaryBlue: "bg-blue hover:bg-hover-blue text-white",
    },
    size: {
      xs: "px-[10px] py-[7px] text-xs",
      sm: "px-[12px] py-[9px] text-xs",
      md: "px-[14px] py-[7px] text-base",
      lg: "px-[18px] py-[10px] text-base",
      xl: "px-[20px] py-[10px] text-lg",
      onlyIcon_xs: "p-[6px]",
      onlyIcon_sm: "p-[8px]",
      onlyIcon_md: "p-[9px]",
      onlyIcon_lg: "p-[11px]",
      onlyIcon_xl: "p-[13px]",
    },
  },

  defaultVariants: {
    color: "Primary",
    size: "md",
  },
});

export function Button({ children, color, size, className, ...props }) {
  return (
    <button className={button({ color, size, className })} {...props}>
      {children}
    </button>
  );
}
