import AppBarAdmin from "@/components/AppBarAdmin";
import { Box } from "@mui/material";
import { Fragment } from "react";

export const metadata = {
  title: "Admin",
};

const borderRoot = "1px solid rgb(229, 234, 242)";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <AppBarAdmin />
      {/* <DrawerAdmin /> */}
      <Box sx={{ display: "flex" }}>{children}</Box>
    </Fragment>
  );
}