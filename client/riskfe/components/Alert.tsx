import React, { InputHTMLAttributes } from "react";
import { Alert, Link } from "@chakra-ui/react";
import NextLink from "next/link";

type AlertInputProps = InputHTMLAttributes<HTMLInputElement> & {
  alertType: string;
};
export enum AlertType {
  ERROR = "error",
  REJECTED = "rejected",
  REFERRED = "referred",
  SUCCESS = "success",
  HIDDEN = "",
}
export const RiskAlert: React.FC<AlertInputProps> = ({ alertType }) => {
  if (alertType === AlertType.SUCCESS) {
    return (
      <Alert status="success">
        <NextLink href="/underwriting">
          <Link>Lets Get It</Link>
        </NextLink>
      </Alert>
    );
  } else if (alertType === AlertType.ERROR) {
    return <Alert status="error">Invalid YOE</Alert>;
  } else if (alertType === AlertType.REFERRED) {
    return <Alert status="warning">Referred</Alert>;
  } else if (alertType === AlertType.REJECTED) {
    return <Alert status="error">Rejected</Alert>;
  } else {
    return <></>;
  }
};
