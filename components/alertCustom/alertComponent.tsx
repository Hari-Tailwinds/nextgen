import { cn } from "@/lib/utils";
import { handleCancel } from "@/redux/slices/notification.redux";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { useDispatch } from "react-redux";

// customized
const alertVariants = cva(
  "relative w-full rounded-xs border px-4 py-3 text-sm grid grid-cols-[auto_1fr_auto] items-center gap-x-3",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-white bg-red-500",
        warning: "text-white bg-yellow-300",
        informational: "text-white bg-sky-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & {
    leftIcon?: React.ElementType;
    rightIcon?: React.ElementType;
  }) {
  const dispatch = useDispatch();
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {/* Left Icon */}
      {LeftIcon && <LeftIcon className="size-5 text-current" />}

      {/* Center Content */}
      <div className="flex flex-col">{children}</div>

      {/* Right Icon */}
      {RightIcon && (
        <RightIcon
          onClick={() => dispatch(handleCancel())}
          className="size-5 text-current cursor-pointer"
        />
      )}
    </div>
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("font-medium tracking-tight line-clamp-1", className)}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("text-sm leading-relaxed", className)} {...props} />
  );
}

export { Alert, AlertDescription, AlertTitle };
