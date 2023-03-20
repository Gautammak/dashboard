import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="app-footer">
      <Typography.Link href="Tel:+1234567890"> +1234567890" </Typography.Link>
      <Typography.Link href="https://www.goggle.com" target={"_blank"}>
        Privacy Policy
      </Typography.Link>

      <Typography.Link href="https://www.goggle.com" target={"_blank"}>
        Terms of Use{" "}
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
