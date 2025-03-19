"use client"
import * as React from "react"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "One",
    subLinks: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
      },
    ],
  },
  {
    title: "Two",
    subLinks: [
      {
        title: "Demo",
        href: "/docs/primitives/progress",
        description: "Shows an indicator for task completion progress.",
      },
      {
        title: "Demo2",
        href: "/docs/primitives/scroll-area",
        description: "Visually separates content with a scrolling area.",
      },
    ],
  },
  {
    title: "Three",
    subLinks: [
      {
        title: "Demo3",
        href: "/docs/primitives/tabs",
        description: "Layered sections of content displayed one at a time.",
      },
      {
        title: "Demo4",
        href: "/docs/primitives/tooltip",
        description: "Displays additional info on hover or keyboard focus.",
      },
    ],
  },
]

export default function NavigationMenuDemo() {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About-us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem  >
          <NavigationMenuTrigger>Parenting Stages</NavigationMenuTrigger>
          <NavigationMenuContent className="flex min-w-[300px] relative">
            {/* Titles List */}
            <ul className="min-w-40 border-r p-4">
              {components.map((component, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "cursor-pointer p-2 text-sm font-medium hover:bg-gray-200 rounded-md",
                    activeIndex === index && "bg-gray-300"
                  )}
                >
                  {component.title}
                </li>
              ))}
            </ul>

            {/* SubLinks List - Ensure proper re-rendering */}
            <ul key={activeIndex} className="min-w-40 p-4">
              {components[activeIndex]?.subLinks.map((subLink,index) => (
                <ListItem key={index} href={subLink.href} title={subLink.title}>
                  {subLink.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/special-children" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Special Children
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Services
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }: any, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p> */}
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)

ListItem.displayName = "ListItem"
