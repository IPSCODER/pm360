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
    ],
  },
  {
    title: "Two",
    subLinks: [
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Shows an indicator for task completion progress.",
      },
      {
        title: "Scroll Area",
        href: "/docs/primitives/scroll-area",
        description: "Visually separates content with a scrolling area.",
      },
    ],
  },
  {
    title: "Three",
    subLinks: [
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "Layered sections of content displayed one at a time.",
      },
      {
        title: "Tooltip",
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
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-[400px]">
            {/* Titles List */}
            <ul className="w-1/3 border-r p-4">
              {components.map((component, index) => (
                <li
                  key={component.title}
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

            {/* SubLinks List */}
            <ul className="w-2/3 p-4">
              {components[activeIndex].subLinks.map((subLink) => (
                <ListItem key={subLink.title} href={subLink.href} title={subLink.title}>
                  {subLink.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)

ListItem.displayName = "ListItem"