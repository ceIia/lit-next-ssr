"use client";

import React from "react";
import { createComponent } from "@lit-labs/react";
import { MyCard } from "@/components/card-lit";

export const Card = createComponent({
  react: React,
  tagName: "my-card",
  elementClass: MyCard,
});
