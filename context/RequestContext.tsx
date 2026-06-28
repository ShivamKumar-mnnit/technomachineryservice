"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, RequestItem } from "@/types";

interface RequestContextType {
  items: RequestItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearAll: () => void;
  totalItems: number;
  isInRequest: (productId: string) => boolean;
}

const RequestContext = createContext<RequestContextType | null>(null);

export function RequestProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<RequestItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("techno-request");
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("techno-request", JSON.stringify(items));
    }
  }, [items, mounted]);

  const addItem = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearAll = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  const isInRequest = (productId: string) =>
    items.some((i) => i.product.id === productId);

  return (
    <RequestContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearAll, totalItems, isInRequest }}
    >
      {children}
    </RequestContext.Provider>
  );
}

export function useRequest() {
  const ctx = useContext(RequestContext);
  if (!ctx) throw new Error("useRequest must be used within RequestProvider");
  return ctx;
}
