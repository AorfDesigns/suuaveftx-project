
import React from 'react'
import CompletedContracts from './_components/CompletedContracts'
import UnderlinedTabs from './_components/Tabs'
import SearchBar from '../../components/Searchbar'

const page = () => {
  return (
    <div>
      <UnderlinedTabs />
      <div className='ml-16 mt-4'>
      <SearchBar placeholder='Search by jobs title' width='w-[620px]' />
      </div>
        <CompletedContracts />
    </div>
  )
}

export default page