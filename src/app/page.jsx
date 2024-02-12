"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the Homepage component
const Homepage = () => {
  // Access the router object using the useRouter hook
  const router = useRouter();

  //  useEffect hook to redirect to "/user-list" when component mounts & Use router.push() to navigate to "/user-list" route
  useEffect(() => {
    router.push("/user-list");
  }, [router]);

  return null;
};

export default Homepage;
