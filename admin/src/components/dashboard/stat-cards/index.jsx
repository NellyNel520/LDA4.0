import React from 'react'
import UsersStats from './UsersStats'
import MonthSales from './MonthSales'
import AnnualSales from './AnnualSales'
import TotalOrders from './TotalOrders'

export default function StatCards() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 h-[10]">
			<UsersStats />

			<MonthSales />

			<AnnualSales />

			<TotalOrders />
		</div>
	)
}
