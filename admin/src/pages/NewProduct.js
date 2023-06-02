import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import NewProductForm from '../components/NewProductForm'

const NewProduct = ({user}) => {
	return (
		<div>
			<Navbar user={user}/>
			<div className="flex">
				<div>
					<Sidebar />
				</div>

        <div className='h-[100vh] w-full '>
          {/* <h1 className='text-white'>New Product </h1> */}
          <NewProductForm />

        </div>
			</div>
		</div>
	)
}

export default NewProduct
