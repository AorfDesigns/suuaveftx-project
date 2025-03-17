import { Card, CardBody } from "@heroui/react";
import React from "react";

const page = ({ params }) => {
  const { id } = params; // Extract 'id' from the params object

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.5fr] gap-14 p-6 max-w-[1500px] mx-auto">
      <Card>
        <CardBody className="gap-4">
          <p className="text-sm text-customGray">Sent: 5 Hours ago</p>
          <p className="text-xl">Proposal</p>
          <p>
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque Yorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur tempus urna at turpis condimentum lobortis. Ut commodo
            efficitur nequYorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis. Class aptent taciti sociosqu ad litora torquent per con
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
