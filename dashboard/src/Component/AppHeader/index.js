import "../AppHeader/index.css";

import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Image, Space, Typography } from "antd";
function AppHeader() {
  return (
    <div className="app-header">
      <Image
        width={40}
        src="https://img.freepik.com/free-vector/gradient-abstract-shape-logo_1061-168.jpg?w=740&t=st=1678964406~exp=1678965006~hmac=b8be5aa65074d48cc2d10f06c84a9d48dcf5b1d3ed6643e1dfb4ec437aa3948b"
        className="App-logo"
        alt="logo"
      />
      <Typography.Title> dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>

        <Badge count={10} style={{ margin: "20px" }}>
          <BellFilled style={{ fontSize: 24, margin: "20px" }} />
        </Badge>
      </Space>
    </div>
  );
}

export default AppHeader;
