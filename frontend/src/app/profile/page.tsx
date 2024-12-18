'use client';

export default function ProfileSettings() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="min-h-screen flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-[30px] w-full">
          {/* Левая колонка (навигация) */}
          <div className="col-span-1 md:col-span-3 flex flex-col text-center md:text-left gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Account Settings</h1>
              <button className="px-4 py-3 border border-black rounded-md">
                Logout
              </button>
            </div>
            <nav className="space-y-3">
              <button className="w-full px-4 py-3 border border-black rounded-md">
                Personal Information
              </button>
              <button className="w-full px-4 py-3 border border-black rounded-md">
                Addresses
              </button>
              <button className="w-full px-4 py-3 border border-black rounded-md">
                Security
              </button>
              <button className="w-full px-4 py-3 border border-black rounded-md">
                Preferences
              </button>
              <a
                href="/profile/orders"
                className="w-full block px-4 py-3 border border-black rounded-md text-center"
              >
                Orders
              </a>
            </nav>
          </div>

          {/* Правая колонка (контент) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Personal Information</h2>

              {/* Форма персональных данных */}
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-black rounded-[6px] focus:outline-none"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-black rounded-[6px] focus:outline-none"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-black rounded-[6px] focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-black rounded-[6px] focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 border border-black rounded-[6px]"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
