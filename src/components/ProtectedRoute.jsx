import { Navigate } from "react-router";
import { useAuthStore } from "@/store/authStore";
import React from 'react'

export const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    return <Navigate to={ redirectTo } />
  }

  return children
}
