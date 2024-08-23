"use client "
import React, { useState } from 'react';
useState

function ProductCard({ isNew, isOnSale, imageSrc, title, price }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md relative">
            {isNew && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-xs rounded-md">
                    NEW
                </div>
            )}
            {isOnSale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded-md">
                    SALE
                </div>
            )}
            <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-sm font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{price}</p>
            <button className="mt-2 w-full bg-gray-200 hover:bg-gray-300 text-sm py-1 rounded">
                +
            </button>
        </div>
    );
}

function FilterSection() {
    return (
        <div className="w-1/4 p-6 bg-gray-100">
            <h2 className="text-lg font-bold mb-4">Filter</h2>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Marka</h3>
                <label className="block mb-1">
                    <input type="checkbox" /> Nike
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> Jordan
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> Converse
                </label>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Broj</h3>
                <label className="block mb-1">
                    <input type="checkbox" /> 42
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> 41
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> 40
                </label>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Boja</h3>
                <label className="block mb-1">
                    <input type="checkbox" /> Crna
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> Bijela
                </label>
                <label className="block mb-1">
                    <input type="checkbox" /> Plava
                </label>
            </div>

            <button className="w-full bg-black text-white py-2 rounded-lg">Primjeni</button>
        </div>
    );
}

function ProductGrid() {
    const products = [
        { isNew: false, isOnSale: false, imageSrc: 'url-to-image', title: 'Nike Air Force 07', price: '€119.99 (820 kn)' },
        { isNew: true, isOnSale: false, imageSrc: 'url-to-image', title: 'Nike Air Force 07', price: '€119.99 (820 kn)' },
        { isNew: false, isOnSale: true, imageSrc: 'url-to-image', title: 'Nike Air Force 07', price: '€119.99 (820 kn)' },
        // Add more products as necessary
    ];

    return (
        <div className="w-3/4 p-6">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Tenisice</h1>
                <div className="flex gap-2 mt-2">
                    <span className="bg-gray-200 px-4 py-2 rounded-full">Nike</span>
                    <span className="bg-gray-200 px-4 py-2 rounded-full">40</span>
                    <span className="bg-gray-200 px-4 py-2 rounded-full">Crna</span>
                </div>
                <p className="mt-2 text-gray-600">27 rezultata</p>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
                <button className="text-gray-600">Prethodna</button>
                <div className="space-x-2">
                    <button className="text-black font-bold">1</button>
                    <button className="text-gray-600">2</button>
                    <button className="text-gray-600">3</button>
                    <button className="text-gray-600">4</button>
                    <button className="text-gray-600">5</button>
                </div>
                <button className="text-gray-600">Sljedeća</button>
            </div>
        </div>
    );
}

export default function list.tsx() {
    return (
        <div className="flex min-h-screen">
            <FilterSection />
            <ProductGrid />
        </div>
    );
}
