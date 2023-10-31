import Avatar from "@mui/material/Avatar";

type RecentActivityItemProps = {
  value: string;
};

const RecentActivityItem = ({ value }: RecentActivityItemProps) => {
  return (
    <li className="flex pb-4">
      <Avatar
        alt="PP"
        src=""
        variant="square"
        className="rounded-lg border-solid border-2 border-slate-200 mr-2"
      />
      <div className="flex flex-1 justify-between">
        <div className="align-center flex flex-col">
          <span className="text-sm font-bold">Plant City</span>
          <span className="text-xs text-slate-400	">28 Oct 2023</span>
        </div>

        <div className="align-center">
          <span className="text-sm font-bold">$12.90</span>
        </div>
      </div>
    </li>
  );
};

export default RecentActivityItem;
