'use client'
import { fetchDishesAction } from '@/utils/actions'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function DishesTable() {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        async function fetchDishes() {
            const result = await fetchDishesAction();
            setDishes(result.dishes);
        }
        fetchDishes();
    }, []);
    console.log(dishes);
    return (
        <div className="overflow-x-auto">
            <table className="table text-right">
                {/* head */}
                <thead>
                    <tr>

                        <th></th>
                        <th>קטגוריה</th>
                        <th>תיאור</th>
                        <th>שם המנה</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* body */}
                    {dishes.map((dish, index) => (
                        <tr key={index}>
                           <td>
                                <div className="flex justify-end">
                                    <Link href={`/admin/dishes/${dish.id}`}>
                                        <button className="btn btn-sm btn-square btn-ghost">עריכה</button>
                                    </Link>
                                </div>
                            </td>
                            <td>{dish.category}</td>
                            <td>{dish.description}</td>
                            <td>{dish.name}</td>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={dish.image}
                                                alt={dish.name} />
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>קטגוריה</th>
                        <th>תיאור</th>
                        <th>שם המנה</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default DishesTable