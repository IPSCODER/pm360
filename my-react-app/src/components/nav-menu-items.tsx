"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Component list with descriptions
const components: { title: string; href: string; description: string }[] = [
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Shows an indicator for task completion progress." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually separates content with a scrolling area." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "Layered sections of content displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "Displays additional info on hover or keyboard focus." },
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Shows an indicator for task completion progress." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually separates content with a scrolling area." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "Layered sections of content displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "Displays additional info on hover or keyboard focus." },
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Shows an indicator for task completion progress." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually separates content with a scrolling area." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "Layered sections of content displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "Displays additional info on hover or keyboard focus." },
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", description: "A modal that interrupts the user with important content and expects a response." },
  { title: "Hover Card", href: "/docs/primitives/hover-card", description: "For sighted users to preview content available behind a link." },
  { title: "Progress", href: "/docs/primitives/progress", description: "Shows an indicator for task completion progress." },
  { title: "Scroll-area", href: "/docs/primitives/scroll-area", description: "Visually separates content with a scrolling area." },
  { title: "Tabs", href: "/docs/primitives/tabs", description: "Layered sections of content displayed one at a time." },
  { title: "Tooltip", href: "/docs/primitives/tooltip", description: "Displays additional info on hover or keyboard focus." },
]

export function NavigationMenuItems() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter components based on search query
  const filteredComponents = components.filter(component =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    component.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <NavigationMenu>
           <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            {/* Search Input */}
            <div className="p-4">
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filtered Components List */}
            <ul className="grid w-[400px] h-[50vh] overflow-auto gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {filteredComponents.length > 0 ? (
                filteredComponents.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-2">No matching components found.</p>
              )}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

     
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"
