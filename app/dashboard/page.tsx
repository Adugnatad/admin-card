"use client";

import CustomerCardTable from "@/components/admin/admin-table";
import AuthHeader from "@/components/auth-header";
import Navbar from "@/components/ui/auth/navbar";
import { redirect } from "next/navigation";

export default function AdminPage() {
  return (
    <>
      <AuthHeader />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mt-10 mb-4">
              Customized Debit Cards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Print the confirmed cards or reject those that do not meet the
              criteria.
            </p>
          </div>
          <CustomerCardTable />
        </div>
      </main>
    </>
  );
}
