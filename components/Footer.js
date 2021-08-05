import React from 'react'

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4  px-32 py-14 bg-gray-100  ">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>How Airbnb worlks</p>
        <p>Newsroom</p>
        <p>Airbnb 2021</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Community</h5>
        <p>Diversity &amp; Belonging</p>
        <p>Accessibility</p>
        <p>Airbnb Associates</p>
        <p>Frontline Stays</p>
        <p>Guest Referrals</p>
        <p>Airbnb.org</p>
      </div>

      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">Host</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Host an Experience</p>
        <p>Responsible hosting</p>
        <p>Resource Center</p>
        <p>Community centers</p>
      </div>

      <div className="text-xs space-y-4 text-gray-800">
        <h5 className="font-bold">Support</h5>
        <p>Our COVID-19 Response</p>
        <p>Help Center</p>
        <p>Cancellation options</p>
        <p>Neighborhood support</p>
        <p>trust &amp; safety</p>
      </div>
    </div>
  )
}

export default Footer
