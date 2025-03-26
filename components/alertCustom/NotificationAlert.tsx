"use client";
import { handleCancel } from "@/redux/slices/notification.redux";
import { RootState } from "@/redux/store";
import { CircleX, TriangleAlert } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, AlertDescription, AlertTitle } from "./alertComponent";

type props = {
  type: "default" | "destructive" | "warning" | "informational";
  // leftIcon: React.ElementType;
  // rightIcon: React.ElementType;
  description: string;
  title?: string;
};

export default function CustomAlert() {
  //   {
  //   type,
  //   // leftIcon,
  //   // rightIcon,
  //   description,
  //   title,
  // }: props
  const dispatch = useDispatch();
  const { type, title, description, isVisible } = useSelector(
    (state: RootState) => state.notification
  );
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        dispatch(handleCancel());
      }, 10000);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [isVisible, dispatch]);

  if (!isVisible) return null;
  return (
    <Alert variant={type} leftIcon={TriangleAlert} rightIcon={CircleX}>
      <AlertTitle>{description}</AlertTitle>
      <AlertDescription>{title}</AlertDescription>
    </Alert>
  );
}
