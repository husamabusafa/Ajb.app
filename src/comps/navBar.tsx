import { useContext, useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconLogin,
} from "@tabler/icons";
import { MantineLogo } from "@mantine/ds";
import { useNavigate, useParams } from "react-router-dom";
import { WepContext } from "../context";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", linkPath: "home_page" },
  { icon: IconGauge, label: "Actions", linkPath: "actions_page" },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Analytics",
    linkPath: "home_page",
  },
  { icon: IconCalendarStats, label: "Releases", linkPath: "home_page" },
  { icon: IconUser, label: "Account", linkPath: "home_page" },
  { icon: IconFingerprint, label: "Security", linkPath: "home_page" },
  { icon: IconSettings, label: "Settings", linkPath: "home_page" },
];

export function NavbarMinimal() {
  const [active, setActive] = useState(199);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(199),
         navigate(`/${link.linkPath}`);
      }}
    />
  ));
  const navigate = useNavigate();
  const { userInfo, setUserInfo }: any = useContext(WepContext);

  return (
    // <Navbar height={750} width={{ base: 80 }} p="md" style={{ height: "100%" }}>
    //   <Center>
    //     <MantineLogo type="mark" size={30} />
    //   </Center>
    //   <Navbar.Section grow mt={50}>
    //     <Stack justify="center" spacing={0}>
    //       {links}
    //     </Stack>
    //   </Navbar.Section>
    //   <Navbar.Section>
    //     <Stack justify="center" spacing={0}>
    //      {userInfo!==null? <NavbarLink icon={IconSwitchHorizontal} label="Change account"onClick={()=>{navigate(`/change_acount`);}} />:<NavbarLink icon={IconLogin} label="login" onClick={()=>{ navigate(`/login`);}}/>}
    //      {userInfo!==null? <div onClick={()=>{setUserInfo(null)}}> <NavbarLink icon={IconLogout} label="Logout"/></div>:<></>}
    //     </Stack>
    //   </Navbar.Section>
    // </Navbar>
    <div></div>
  );
}
