import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const About = () => {
	return (
    <div >

   
		<div className="regContainer h-[100%] text-white justify-center">
					<h1 className="text-center font-play text-[4rem]">About Us</h1>
		


			
					<div className="   rounded-xl justify-center ">
						<div className="regWrapper  rounded text-center   w-[75%] ml-[12%] justify-center  mt-[3rem] p-10 mb-20  font-play">
							<div>
								<p>
									At our store, we believe that fashion should be accessible,
									affordable, and fun for everyone. We are dedicated to
									providing high-quality t-shirts that are not only comfortable
									to wear but also reflect your unique style and personality.
									<br />
									<br />
									We take pride in offering a wide range of designs, colors, and
									sizes to suit every taste and preference. From classic graphic
									tees to trendy statement pieces, we have something for
									everyone. Our t-shirts are made from premium materials to
									ensure maximum comfort, durability, and style.
									<br />
									<br />
									Our team is passionate about fashion and committed to
									providing exceptional customer service. We strive to make your
									shopping experience as seamless and enjoyable as possible. We
									are always on the lookout for new trends and designs to keep
									our collection fresh and exciting.
									<br />
									<br />
									Thank you for choosing our store for your t-shirt needs. We
									look forward to serving you and helping you find the perfect
									t-shirt to express your unique style.
								</p>
							</div>
						<Link to={'/products'}>
							<button className="bg-white justify-center  text-blue-400 py-2 px-2 mt-6 hover:bg-blue-400 hover:text-white rounded">
								SHOP NOW
							</button>
						</Link>
						</div>
					</div>
			


	
		</div>
    </div>
	)
}

export default About
