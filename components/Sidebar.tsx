import { Cards } from "@/components/Cards/Cards";
import { Receivers } from "@/components/Receivers";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

export const Sidebar = () => {
  return (
    <Paper className="h-full px-8 py-8 overflow-hidden flex flex-col bg-white/[0.5]">
      <div className="flex justify-between items-center mb-8">
        <IconButton
          aria-label={""}
          className="border-solid border-2 border-slate-200"
        >
          <Badge badgeContent={20} color="primary">
            <NotificationsNoneOutlinedIcon color="action" />
          </Badge>
        </IconButton>
        <Avatar alt="Person 1" src="/assets/person_1.png" />
      </div>

      <Cards />
      <Receivers users={[]} />
      {/* <RecentActivity transactions={transactions} /> */}
    </Paper>
  );
};
