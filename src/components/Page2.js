import React from 'react';

const listView = props => {
  return (
    <div className="page-two">
        <h3>Task List</h3>

        <h4> ---------------------------------------------------</h4>
        <div id="product-container" className="filter-wrapper" >

            <div className='drop-list' className="form-group">
                <label htmlFor="Sort">Sort: </label>
                <select id="Sort" name="Sort">
                    <option value="Title">Title</option>
                    <option value="Status">Status</option>
                    <option value="Type">Type</option>
                </select>

            </div>
            <div className='drop-list' className="form-group">
                <label htmlFor="Status">Status: </label>
                <select id="Status" name="Status">
                    <option value="SelectStatus">SelectStatus</option>
                    <option value="ToDo"> To Do </option>
                    <option value="InProcess">In Process</option>
                    <option value="Review">Review</option>
                    <option value="Done">Done</option>

                </select>

            </div>

            <div className='drop-list' className="form-group">
                <label htmlFor="Type">Type: </label>
                <select id="Type" name="Type">
                    <option value="*">Select Type</option>
                    <option value="Traditional">Function</option>
                    <option value="Luxury">Tasks</option>
                </select>

            </div>


        </div>















    </div>
  )
}





export default listView;