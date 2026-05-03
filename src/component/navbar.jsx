"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Link } from "@heroui/react";

export default function AppNavbar() {
  return (
    <Navbar isBordered className="bg-white/90 backdrop-blur-md">
      {/* Updated Brand Name to DESIGN SCHOOL */}
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">D</span>
          </div>
          <p className="font-bold text-orange-600 text-xl tracking-tighter uppercase">Design School</p>
        </Link>
      </NavbarBrand>

      {/* Navigation links with updated logic */}
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link href="/" className="text-gray-600 hover:text-orange-500">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/courses" className="text-gray-600 hover:text-orange-500">Courses</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button as={Link} href="/login" color="warning" variant="flat" className="font-bold text-orange-600">
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
}