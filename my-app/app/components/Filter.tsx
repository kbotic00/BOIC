import React from 'react';

export const Filter = () => {
    return (
        <div className='mt-12 flex justify-between'> 
            <div className='flex gap-6 pl-10 flex-wrap'>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200'>
                    <option>Type</option>
                    <option value="physical"></option>
                    <option value="digital"></option>
                </select>
                <input type="text" name="min" placeholder="min price"className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
                <input type="text" name="max"placeholder="max price"className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"/>
                <select name="size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200'>
                    <option>Size</option>
                    <option value="physical"></option>
                    <option value="digital"></option>
                </select>
                <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200'>
                    <option>color</option>
                    <option value="physical"></option>
                    <option value="digital"></option>
                </select>
                <select name="brand" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200'>
                    <option>brand</option>
                    <option value="physical"></option>
                    <option value="digital"></option>
                </select>
                
            </div>
            <div className="pr-10">
            <select name="sort by" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-slate-200'>
                    <option>sort by</option>
                    <option value="newest">newest</option>
                    <option value="oldest">oldest</option>
                    <option value="maxtop">price(max top)</option>
                    <option value="lowtop">price (low top)</option>
                </select>
            </div>
        </div>
    );
};
export default Filter