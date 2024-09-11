import React from 'react'

const SearchUser = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0">
        <div className="w-full max-w-md mx-auto mt-10">
              <div>
                  <input
                      type="text"
                      placeholder="Search user by name or email"
                  />
            </div>
        </div>
    </div>
  )
}

export default SearchUser

