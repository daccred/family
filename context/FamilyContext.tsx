"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Family {
  id: string;
  name: string;
  icon: string;
  type: string;
  budget: string;
  description: string;
}

interface FamilyContextType {
  families: Family[];
  addFamily: (family: Family) => void;
  updateFamily: (family: Family) => void;
  deleteFamily: (id: string) => void;
}

const FamilyContext = createContext<FamilyContextType | undefined>(undefined);

export function FamilyProvider({ children }: { children: ReactNode }) {
  const [families, setFamilies] = useState<Family[]>([]);

  const addFamily = (family: Family) => {
    setFamilies(prev => [...prev, family]);
  };

  const updateFamily = (updatedFamily: Family) => {
    setFamilies(prev => 
      prev.map(family => 
        family.id === updatedFamily.id ? updatedFamily : family
      )
    );
  };

  const deleteFamily = (id: string) => {
    setFamilies(prev => prev.filter(family => family.id !== id));
  };

  return (
    <FamilyContext.Provider value={{ families, addFamily, updateFamily, deleteFamily }}>
      {children}
    </FamilyContext.Provider>
  );
}

export function useFamily() {
  const context = useContext(FamilyContext);
  if (context === undefined) {
    throw new Error('useFamily must be used within a FamilyProvider');
  }
  return context;
}