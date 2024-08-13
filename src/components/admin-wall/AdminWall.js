import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from './admin-header/AdminHeader';
export default function AdminWall() {
  return (
    <>
    <AdminHeader/>
    <Outlet/>
    </>
  )
}
