import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'


function Search({ searchResults }) {
  console.log(searchResults)
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex" />
      <section>
        <p className="text-xs">`300+ stays {range} for {noOfGuests} number of guests`</p>
        <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>

        <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="button">Cancellation Flexibility</p>
          <p className="button">Type of Place</p>
          <p className="button">Price</p>
          <p className="button">Rooms and Beds</p>
          <p className="button">More filters</p>
        </div>

        <div className="flex flex-col">
          {searchResults.map(({ img, location, title, star, price, total }) => (
            <InfoCard img={img}
              location={location}
              title={title}
              star={star}
              price={price}
              total={total} />
          ))}
        </div>
      </section >
      <Footer />
    </div >
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(res => res.json())

  return {
    props: {
      searchResults,
    }
  }
}
