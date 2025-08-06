"use client";

import { forwardRef, memo, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";

interface NavLeaf {
  title: string;
  url: string;
  isActive?: boolean;
}

interface NavParent extends NavLeaf {
  collapsible?: boolean;
  items?: (NavParent | NavLeaf)[];
  icon?: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavParent[];
}

const isParent = (item: NavParent | NavLeaf): item is NavParent =>
  Array.isArray((item as NavParent).items);

const containsActive = (
  item: NavParent | NavLeaf,
  pathname: string,
): boolean => {
  if (!isParent(item)) return pathname === item.url;
  return (
    pathname === item.url ||
    item.items?.some((i) => containsActive(i, pathname)) ||
    false
  );
};

interface NavButtonProps {
  url: string;
  title: string;
  icon?: LucideIcon;
  isActive?: boolean;
  onNavigate: (url: string) => void;
}

const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(
  ({ url, title, icon: Icon, isActive, onNavigate }, ref) => (
    <SidebarMenuButton
      ref={ref}
      tooltip={title}
      variant={isActive ? "outline" : "default"}
      onClick={() => onNavigate(url)}
      className={isActive ? "border border-primary/30" : undefined}
    >
      {Icon && <Icon className={isActive ? "text-primary" : undefined} />}
      <span>{title}</span>
    </SidebarMenuButton>
  ),
);
NavButton.displayName = "NavButton";

interface NavCollapsibleProps {
  item: NavParent;
  pathname: string;
  onNavigate: (url: string) => void;
}

const NavCollapsible = memo<NavCollapsibleProps>(
  ({ item, pathname, onNavigate }) => {
    const isOpen = useMemo(
      () => containsActive(item, pathname),
      [item, pathname],
    );

    const isActive = useMemo(
      () => item.items?.some((c) => containsActive(c, pathname)) ?? false,
      [item, pathname],
    );

    return (
      <Collapsible defaultOpen={isOpen} asChild>
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton
              tooltip={item.title}
              variant={isActive ? "outline" : "default"}
              className={`group/collapsible ${
                isActive
                  ? "bg-background text-accent-foreground border border-primary/30"
                  : ""
              }`}
            >
              {item.icon && (
                <item.icon className={`${isActive ? "text-primary" : ""}`} />
              )}
              <span>{item.title}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <SidebarMenuSub>
              {item.items?.map((sub) => (
                <NavItem
                  key={sub.url}
                  item={sub}
                  pathname={pathname}
                  onNavigate={onNavigate}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  },
);
NavCollapsible.displayName = "NavCollapsible";

interface NavLeafItemProps {
  item: NavLeaf;
  pathname: string;
  onNavigate: (url: string) => void;
}

const NavLeafItem = memo<NavLeafItemProps>(({ item, pathname, onNavigate }) => (
  <SidebarMenuSubItem>
    <SidebarMenuSubButton
      onClick={() => onNavigate(item.url)}
      className={pathname === item.url ? "bg-accent" : undefined}
    >
      {item.title}
    </SidebarMenuSubButton>
  </SidebarMenuSubItem>
));
NavLeafItem.displayName = "NavLeafItem";

interface NavItemProps {
  item: NavParent | NavLeaf;
  pathname: string;
  onNavigate: (url: string) => void;
}

const NavItem = memo<NavItemProps>(({ item, pathname, onNavigate }) => {
  if (isParent(item) && item.items && item.items.length > 0) {
    if (item.collapsible) {
      return (
        <NavCollapsible
          item={item}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      );
    }

    return (
      <>
        <SidebarMenuItem>
          <NavButton
            url={item.url}
            title={item.title}
            icon={item.icon}
            isActive={pathname === item.url}
            onNavigate={onNavigate}
          />
        </SidebarMenuItem>

        <SidebarMenuSub>
          {item.items.map((sub) => (
            <NavItem
              key={sub.url}
              item={sub}
              pathname={pathname}
              onNavigate={onNavigate}
            />
          ))}
        </SidebarMenuSub>
      </>
    );
  }

  return (
    <SidebarMenuItem>
      <NavButton
        url={item.url}
        title={item.title}
        icon={(item as NavParent).icon}
        isActive={pathname === item.url}
        onNavigate={onNavigate}
      />
    </SidebarMenuItem>
  );
});
NavItem.displayName = "NavItem";

export function NavMain({ groups }: { groups: NavGroup[] }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {groups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => (
              <NavItem
                key={item.url}
                item={item}
                pathname={pathname}
                onNavigate={router.push}
              />
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
