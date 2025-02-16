'use client'
import React from 'react'
import {Input, Textarea} from "@heroui/react";
const License = () => {
    const [errors, setErrors] = React.useState({});
  return (
    <div>
        <div className='w-4/5 p-4 ml-8 mt-8 rounded-lg bg-gradient-to-b from-[#CCE7F2] via-[#A1DCF3] to-[#49C0F0]'>
            <h1 className='text-3xl font-bold'>License Your Design</h1>
            <p className='text-base'>Ensure you are the original creator or rightful owner of the design you wish to upload. Uploading someone else’s work without permission may infringe their copyright.
            By uploading, you confirm you have the necessary rights and permissions. Learn more</p>
        </div>
        <div className='bg-[#FAFAFA] p-4 w-3/5 ml-8 mt-4'>
        <div className="flex flex-col gap-4 w-full">
        <Input
          errorMessage={({validationDetails}) => {
            if (validationDetails.valueMissing) {
              return "Please enter your name";
            }

            return errors.name;
          }}
          label="Design Title"
          labelPlacement="outside"
          name="name"
          placeholder="What is the title of your design?"
          className='font-bold border-2 border-[#d1d1d1] rounded-lg'
        />
          <Textarea
      className="w-full font-bold"
      label="Design Description"
      labelPlacement="outside"
      placeholder="Describe your design in details"
    />
        </div>
        
        </div>
    </div>
  )
}

export default License