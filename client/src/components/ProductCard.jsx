import React from 'react'
import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom'

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`

const Container = styled.div`
	flex: 1;
	margin-bottom: 1rem;
	min-width: 18rem;
	max-width: 20rem;
	height: 27rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: black;
	position: relative;
	&:hover ${Info} {
		opacity: 1;
	}
`

const Image = styled.img`
	height: 90%;
	width: 100%;
	z-index: 2;
`

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;
	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`
const ProductCard = ({item}) => {
  return (
    <div>
      <Container>
        {/* <Circle /> */}
			<Image src={item.img} />
			<Info>
			<Link to={`/product/${item._id}`}>
				<Icon>
					<ShoppingCartIcon />
				</Icon>
			</Link>
      <Link to={`/product/${item._id}`}>
					<Icon>
						<SearchIcon />
					</Icon>
				</Link>

				{/* <Link to={'/profile'}> */}
				<Icon>
					<FavoriteIcon className='hover:fill-red-400'/>
				</Icon>
				{/* </Link> */}
			</Info>

      </Container>
      

      </div>
     

      

    
  )
}

export default ProductCard