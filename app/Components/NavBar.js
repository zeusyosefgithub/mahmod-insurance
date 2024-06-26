'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from "../Auth/AuthContext";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signUp, signIn, signOutt, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const menuItems = [
    "דף אישי",
    "לוּחַ מַחווָנִים",
    "פעילות",
    "ניתוח",
    "מערכת",
    "פריסות",
    "ההגדרות שלי",
    "להתנתק",
  ];

  const handelSignout = async () => {
    setLoading(true);
    try {
      await signOutt();
    }
    catch (e) {
      console.log(e);
    }
    setLoading(false);
  }


  return (
    <Navbar dir="rtl" onMenuOpenChange={setIsMenuOpen} className="reset-style">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="font-bold text-inherit">מחמוד כבהה</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Link href="/">
            דף הבית
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/add">
            יצרת תופס
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/checks">
            ניתונים
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/accidents">
            תאונות  
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/repairOrder">
          הזמנה לתיקון
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/settings">
            הגדרות
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {
          currentUser && <NavbarItem>
            {loading && <Spinner className="absolute left-0 top-0 right-0 bottom-0 z-50" />}
            <Button onClick={handelSignout} color="danger" variant="flat">
              יצאה מהחשבון
            </Button>
          </NavbarItem>
        }
      </NavbarContent>
      <NavbarMenu>

          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/"
              size="lg"
            >דף הבית</Link>
          </NavbarMenuItem>
          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/add"
              size="lg"
            >יצרת תופס</Link>
          </NavbarMenuItem>
          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/checks"
              size="lg"
            >ניתונים</Link>
          </NavbarMenuItem>
          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/accidents"
              size="lg"
            >תאונות</Link>
          </NavbarMenuItem>
          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/repairOrder"
              size="lg"
            >הזמנה לתיקון</Link>
          </NavbarMenuItem>
          <NavbarMenuItem dir="rtl">
            <Link
              className="w-full"
              href="/settings"
              size="lg"
            >הגדרות</Link>
          </NavbarMenuItem>
  
      </NavbarMenu>
    </Navbar>
  )
}