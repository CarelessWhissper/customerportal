import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  DollarSign,
  CreditCard,
  List,
  Send,
  Upload,
  PieChart,
  BarChart,
  User,
  Shield,
  ChevronDown
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar";


import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


// Menu items with groups.
const items = [
  {
    group: "Application",
    items: [
      {
        title: "Home",
        url: "#",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
    ],
  },
  {
    group: "Accounts",
    items: [
      {
        title: "Savings Account",
        url: "#savings",
        icon: DollarSign,
      },
      {
        title: "Checking Account",
        url: "#checking",
        icon: CreditCard,
      },
      {
        title: "Credit Cards",
        url: "#credit",
        icon: CreditCard,
      },
    ],
  },
  {
    group: "Transactions",
    items: [
      {
        title: "View History",
        url: "#history",
        icon: List,
      },
    ],
  },
  {
    group: "Transfer",
    items: [
      {
        title: "Internal Transfer",
        url: "#internal",
        icon: Send,
      },
      {
        title: "External Transfer",
        url: "#external",
        icon: Upload,
      },
      {
        title: "Scheduled Transfer",
        url: "#scheduled",
        icon: Calendar,
      },
    ],
  },
  {
    group: "Analytics",
    items: [
      {
        title: "Spending Trends",
        url: "#trends",
        icon: PieChart,
      },
      {
        title: "Budget Tracker",
        url: "#budget",
        icon: BarChart,
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        title: "Profile",
        url: "#profile",
        icon: User,
      },
      {
        title: "Security",
        url: "#security",
        icon: Shield,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {items.map((group, groupIndex) => (
          <Collapsible key={`group-${groupIndex}`} defaultOpen>
            <SidebarGroup>
              <SidebarGroupLabel asChild>
                <CollapsibleTrigger>
                  {group.group}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item, itemIndex) => (
                      <SidebarMenuItem key={`item-${groupIndex}-${itemIndex}`}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}


