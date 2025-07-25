import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

export const AuthLayout = ({
  children,
  title = "",
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        className={"box-shadow"}
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { sm: 450 },
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
