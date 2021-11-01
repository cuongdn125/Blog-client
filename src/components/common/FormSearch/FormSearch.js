import React from 'react'
import './FormSearch.scss';
import 'boxicons';


function FormSearch() {
    return (
        <>
            <form className="form-search">
                <label htmlFor="input-search" className="label-input-search">
                    <box-icon name='search-alt' className="icon-search"></box-icon>
                </label>
                <input id="input-search" type="text" className="input-search" placeholder="Tìm kiếm" name="qq" />
            </form>
        </>
    )
}

export default FormSearch
