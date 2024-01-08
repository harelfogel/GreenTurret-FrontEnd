import React from "react";
import Typography from "@mui/material/Typography";

const ChatHeaderSection: React.FC = () => {
  return (
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-4">
        <Typography variant="h5" component="h1" className="font-bold">
          Chat Room Title
        </Typography>
        <Typography variant="subtitle1" className="opacity-50">
          Smaller headline
        </Typography>
      </div>
      <div className="flex items-center">
        {/* Add logo, pictures, and member count here */}
        <div className="logo">Logo</div>
        <div className="pictures">Pictures</div>
        <Typography variant="body1" className="ml-2">
          Members: 10
        </Typography>
      </div>
    </div>
  );
};

export default ChatHeaderSection;
