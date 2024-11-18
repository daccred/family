"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function FamilyPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/family/list");
  }, [router]);

  return null;
}