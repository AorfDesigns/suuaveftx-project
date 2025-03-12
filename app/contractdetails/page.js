import React from "react";
import JobCard from "./_components/JobCard";
import ClientsOffer from "./_components/ClientsOffer";

const Page = () => {
  return (
    <>
    <h1 className="text-xl ml-16 font-bold mt-4">Contract Information</h1>
    <hr></hr>
    <div className="grid grid-cols-10 gap-4 p-12">
      {/* JobCard takes 6/10 (60%) of the space */}
      <div className="col-span-7">
        <JobCard />
      </div>

      {/* ClientsOffer takes 4/10 (40%) of the space */}
      <div className="col-span-3">
        <ClientsOffer />
      </div>
    </div>
    </>
  );
};

export default Page;
